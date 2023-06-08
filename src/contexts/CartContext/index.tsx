/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useState } from 'react';
import CartProductType from '../../types/cart.types';

interface ICartContext {
  isVisible: boolean;
  products: CartProductType[];
  toogleCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toogleCart: () => { }
});


function CartContextProvider({ children }: CartContextProviderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState<CartProductType[] | []>([]);

  function toogleCart() {
    setIsVisible((prevState) => !prevState);
  }

  return (
    <CartContext.Provider value={{ isVisible, products, toogleCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
