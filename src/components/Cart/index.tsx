import { useContext } from 'react';
import { BsCartCheck } from 'react-icons/bs';
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../CartItem';
import CustomButton from '../CustomButton';
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from './styles';

function Cart() {
  const { isVisible, toogleCart, products, productsTotalPrice, productsCount } = useContext(CartContext);

  return (
    <CartContainer isVisible={isVisible}>

      <CartEscapeArea onClick={toogleCart} />

      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {products.map(product => <CartItem key={product.id} product={product} />)}

        <CartTotal>
          {productsCount === 0 ? <p>Seu carrinho está vazio!</p> :
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
          <CustomButton startIcon={<BsCartCheck />}>
            Ir para Checkout
          </CustomButton>
        }
      </CartContent>

    </CartContainer>
  );
}

export default Cart;
