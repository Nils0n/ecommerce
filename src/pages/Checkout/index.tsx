import { useContext } from 'react';
import { BsBagCheck } from 'react-icons/bs';
import CartItem from '../../components/CartItem';
import CustomButton from '../../components/CustomButton';
import { CartContext } from '../../contexts/CartContext';
import { CheckoutContainer, CheckoutTitle, CheckoutProducts, CheckoutTotal } from './styles';

function Checkout() {
  const { products, productsTotalPrice } = useContext(CartContext);

  return (
    <CheckoutContainer>

      <CheckoutTitle>
        Checkout
      </CheckoutTitle>
      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {products.map(product => <CartItem key={product.id} product={product} />)}
          </CheckoutProducts>

          <CheckoutTotal>
            <>
              Total R$: {productsTotalPrice.toLocaleString('pt-br',
                {
                  style: 'decimal',
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2
                })}
            </>
          </CheckoutTotal>

          <CustomButton
            startIcon={<BsBagCheck />}
          >
            Finalizar compra
          </CustomButton>
        </>
      ) : (
        <>
          <p>seu carrinho está vazio!</p>
        </>
      )}


    </CheckoutContainer>
  );
}

export default Checkout;
