import IProductType from '../../types/product.types';
import { ProductContainer, ProductImage, ProductInfo } from './styles';

interface IProductItem {
  product: IProductType;
}

function ProductItem({ product }: IProductItem) {
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl} />
      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  );
}

export default ProductItem;
