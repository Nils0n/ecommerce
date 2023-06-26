/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import ICartProductType from '../../types/cart.types';
import IProductType from '../../types/product.types';

interface ICartContext {
  isVisible: boolean;
  productsTotalPrice: number;
  productsCount: number;
  products: ICartProductType[];
  toogleCart: () => void;
  addProductToCart: (product: IProductType) => void;
  removeProductFromCart: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  productsTotalPrice: 0,
  productsCount: 0,
  products: [],
  toogleCart: () => { },
  addProductToCart: () => { },
  removeProductFromCart: () => { },
  increaseProductQuantity: () => { },
  decreaseProductQuantity: () => { },
});


function CartContextProvider({ children }: CartContextProviderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState<ICartProductType[] | []>([]);

  useEffect(() => {
    const productsFromLocalStorage = JSON.parse(
      localStorage.getItem('@ClubCcartProducts')!
    );

    if (productsFromLocalStorage?.length > 0) {
      setProducts(productsFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@ClubCcartProducts', JSON.stringify(products));
  }, [products]);

  const productsTotalPrice = useMemo(() => {
    return products.reduce((acc: number, currentProduct: ICartProductType) => {
      return acc + currentProduct.price * currentProduct.quantity;
    }, 0);
  }, [products]);


  const productsCount = useMemo(() => {
    return products.reduce((acc: number, currentProduct: ICartProductType) => {
      return acc + currentProduct.quantity;
    }, 0);
  }, [products]);

  function toogleCart() {
    setIsVisible((prevState) => !prevState);
  }

  function addProductToCart(product: IProductType) {
    const productIsAlreadyInCart = products.some(item => item.id === product.id);

    if (productIsAlreadyInCart) {
      return setProducts(prevState =>
        prevState.map(item => item.id === product.id ?
          { ...item, quantity: item.quantity + 1 } : item));
    }

    setProducts(prevState => [...prevState, { ...product, quantity: 1 }]);
  }

  function removeProductFromCart(productId: string) {
    setProducts(prevState => prevState.filter(item => item.id !== productId));
  }

  function increaseProductQuantity(productId: string) {
    setProducts(prevState =>
      prevState.map(item => item.id === productId ?
        { ...item, quantity: item.quantity + 1 } : item));
  }

  function decreaseProductQuantity(productId: string) {
    setProducts(prevState =>
      prevState.map(item => item.id === productId ?
        { ...item, quantity: item.quantity - 1 } : item).filter(item => item.quantity > 0)
    );
  }





  return (
    <CartContext.Provider value={{
      isVisible,
      products,
      productsTotalPrice,
      productsCount,
      toogleCart,
      addProductToCart,
      removeProductFromCart,
      increaseProductQuantity,
      decreaseProductQuantity
    }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
