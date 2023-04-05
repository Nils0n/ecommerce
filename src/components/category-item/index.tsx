import CategoryType from '../../types/category.types';
import { CategoryItemContainer, CategoryName } from './styles';


interface CategoryItemProps {
  category: CategoryType
}

function CategoryItem({ category }: CategoryItemProps) {
  return (
    <CategoryItemContainer
      backgroundImage={category.imageUrl}
    >
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  );
}

export default CategoryItem;
