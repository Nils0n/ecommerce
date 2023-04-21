import { useEffect, useState } from 'react';
import { CategoriesContainer, CategoriesContent } from './styles';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase.config';

import CategoryItem from '../CategoryItem';
import CategoryType from '../../types/category.types';
import { CategoryConverter } from '../../converts/firestore.converts';


function Categories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  async function getCategories() {
    try {

      const categoriesFromFirestore: CategoryType[] = [];
      const querySnapshot = await getDocs(collection(db, 'categories').withConverter(CategoryConverter));

      querySnapshot.forEach(category => {
        categoriesFromFirestore.push(category.data());
      });

      setCategories(categoriesFromFirestore);

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
