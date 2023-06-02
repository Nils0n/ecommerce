import { useContext, useEffect } from 'react';

import CategoryItem from '../CategoryItem';
import Loading from '../Loading';

import { CategoriesContainer, CategoriesContent } from './styles';

import { CategoryContext } from '../../contexts/CategoryContext';


function Categories() {
  const { categories, getCategories, isLoading } = useContext(CategoryContext);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoriesContainer>
      {isLoading && <Loading />}
      <CategoriesContent>
        {categories.map(category =>
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        )}
      </CategoriesContent>
    </CategoriesContainer>
  );
}

export default Categories;
