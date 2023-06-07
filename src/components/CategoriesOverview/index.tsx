import { useContext, useEffect } from 'react';
import CategoryOverview from '../CategoryOverview';
import { Container } from './styles';
import { CategoryContext } from '../../contexts/CategoryContext';
import Loading from '../Loading';

function CategoriesOverview() {
  const { categories, getCategories, isLoading } = useContext(CategoryContext);

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      {categories.map(category => <CategoryOverview key={category.id} category={category} />)}
    </Container>
  );
}

export default CategoriesOverview;
