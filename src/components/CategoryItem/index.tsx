import { useNavigate } from 'react-router-dom';
import CategoryType from '../../types/category.types';
import { CategoryItemContainer, CategoryName } from './styles';


interface ICategoryItemProps {
  category: CategoryType
}

function CategoryItem({ category }: ICategoryItemProps) {
  const navigate = useNavigate();

  return (
    <CategoryItemContainer
      backgroundImage={category.imageUrl}
    >
      <CategoryName onClick={() => navigate(`/category/${category.id}`)}>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  );
}

export default CategoryItem;
