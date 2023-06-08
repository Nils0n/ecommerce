import { useContext } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { CartContext } from '../../contexts/CartContext';
import IProductType from '../../types/product.types';
import CustomButton from '../CustomButton';
import { ProductContainer, ProductImage, ProductInfo } from './styles';

interface IProductItem {
  product: IProductType;
}

function ProductItem({ product }: IProductItem) {
  const { addProductToCart } = useContext(CartContext);

  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton
          startIcon={<BsCartPlus size={16} />}
          onClick={() => addProductToCart(product)}
        >
          Adicionar ao carrinho
        </CustomButton>
      </ProductImage>
      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  );
}

export default ProductItem;
