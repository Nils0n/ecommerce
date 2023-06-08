import { useContext } from 'react';
import { BsCartCheck } from 'react-icons/bs';
import { CartContext } from '../../contexts/CartContext';
import CustomButton from '../CustomButton';
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from './styles';

function Cart() {
  const { isVisible, toogleCart } = useContext(CartContext);

  return (
    <CartContainer isVisible={isVisible}>

      <CartEscapeArea onClick={toogleCart} />

      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>
        <CartTotal>Total: R$250,00</CartTotal>

        <CustomButton startIcon={<BsCartCheck />}>
          Ir para Checkout
        </CustomButton>
      </CartContent>

    </CartContainer>
  );
}

export default Cart;
