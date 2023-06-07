import { useContext, useEffect } from 'react';
import CategoryOverview from '../CategoryOverview';
import { Container } from './styles';
import { CategoryContext } from '../../contexts/CategoryContext';

function CategoriesOverview() {
  const { categories, getCategories } = useContext(CategoryContext);

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
  }, []);


  return (
    <Container>
      {categories.map(category => <CategoryOverview key={category.id} category={category} />)}
    </Container>
  );
}

export default CategoriesOverview;
