import { useContext } from 'react';
import { BsCartCheck } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../CartItem';
import CustomButton from '../CustomButton';
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from './styles';

function Cart() {
  const { isVisible, toogleCart, products, productsTotalPrice, productsCount } = useContext(CartContext);
  const navigate = useNavigate();

  function handleCheckoutClick() {
    navigate('/checkout');
    toogleCart();

  }

  return (
    <CartContainer isVisible={isVisible}>

      <CartEscapeArea onClick={toogleCart} />

      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {products.map(product => <CartItem key={product.id} product={product} />)}

        <CartTotal>
          {productsCount === 0 ? 'Seu carrinho está vazio!' :
            <>
              Total R$: {productsTotalPrice.toLocaleString('pt-br',
                {
                  style: 'decimal',
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2
                })}
            </>
          }

        </CartTotal>

        {productsCount > 0 &&
          <CustomButton onClick={handleCheckoutClick} startIcon={<BsCartCheck />}>
            Ir para Checkout
          </CustomButton>
        }
      </CartContent>

    </CartContainer>
  );
}

export default Cart;
