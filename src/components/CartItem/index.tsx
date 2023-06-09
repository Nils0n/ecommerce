import { useContext } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import { CartContext } from '../../contexts/CartContext';
import ICartProductType from '../../types/cart.types';
import { CartItemContainer, CartItemInfo, CartItemImage, CartItemQuantity, RemoveButton } from './styles';

interface CartItemProps {
  product: ICartProductType;
}


function CartItem({ product }: CartItemProps) {
  const { removeProductFromCart, increaseProductQuantity, decreaseProductQuantity } = useContext(CartContext);

  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>{product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus
            onClick={() => decreaseProductQuantity(product.id)}
            size={20}
          />

          <p>{product.quantity}</p>

          <AiOutlinePlus
            onClick={() => increaseProductQuantity(product.id)}
            size={20}
          />

        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={() => removeProductFromCart(product.id)}>
        <AiOutlineClose size={25} />
      </RemoveButton>

    </CartItemContainer>
  );
}

export default CartItem;
