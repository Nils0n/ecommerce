import { useContext, useEffect } from 'react';
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
      {categories.map(category => (<p key={category.id}>{category.displayName}</p>))}
    </Container>
  );
}

export default CategoriesOverview;
