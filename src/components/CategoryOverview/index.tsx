import ICategoryType from '../../types/category.types';
import { CategoryContainer, CategoryTitle, ProductsContainer } from './styles';
import ProductItem from '../ProductItem';

interface ICategoryOverviewProps {
  category: ICategoryType;
}

function CategoryOverview({ category }: ICategoryOverviewProps) {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>
      <ProductsContainer>
        {category.products.slice(0, 4).map(product => <ProductItem key={product.id} product={product} />)}
      </ProductsContainer>
    </CategoryContainer>
  );
}

export default CategoryOverview;
