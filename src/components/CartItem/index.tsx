import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import ICartProductType from '../../types/cart.types';
import { CartItemContainer, CartItemInfo, CartItemImage, CartItemQuantity, RemoveButton } from './styles';

interface CartItemProps {
  product: ICartProductType;
}


function CartItem({ product }: CartItemProps) {
  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>{product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus size={20} />
          <p>{product.quantity}</p>
          <AiOutlinePlus size={20} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton>
        <AiOutlineClose size={25} />
      </RemoveButton>

    </CartItemContainer>
  );
}

export default CartItem;
