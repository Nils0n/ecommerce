import { useEffect, useState } from 'react';

import CategoryType from '../../types/category.types';
import api from '../../services/api';

import './styles.css';

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
  }, [])

  return (
    <div className="categories-container">
      <div className="categories-content">

      </div>
    </div>
  );
}

export default Categories;
