import CategoryType from '../../types/category.types';
import { CategoryItemContainer, CategoryName } from './styles';


interface ICategoryItemProps {
  category: CategoryType
}

function CategoryItem({ category }: ICategoryItemProps) {
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
