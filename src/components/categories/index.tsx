import { useEffect, useState } from 'react';

import CategoryItem from '../category-item';

import CategoryType from '../../types/category.types';
import api from '../../services/api';
import { CategoriesContainer, CategoriesContent } from './styles';


function Categories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  async function getCategories() {
    try {
      const { data } = await api.get('/category');
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoriesContainer>
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
