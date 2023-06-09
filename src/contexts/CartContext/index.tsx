/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useState } from 'react';
import ICartProductType from '../../types/cart.types';
import IProductType from '../../types/product.types';

interface ICartContext {
  isVisible: boolean;
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
