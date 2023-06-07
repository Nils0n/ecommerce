import ICategoryType from '../../types/category.types';
import { CategoryContainer, CategoryTitle, ProductsContainer } from './styles';

interface ICategoryOverviewProps {
  category: ICategoryType;
}

function CategoryOverview({ category }: ICategoryOverviewProps) {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>
      <ProductsContainer>
      </ProductsContainer>
    </CategoryContainer>
  );
}

export default CategoryOverview;
