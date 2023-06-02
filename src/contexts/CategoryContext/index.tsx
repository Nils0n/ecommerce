import { collection, getDocs } from 'firebase/firestore';
import { createContext, ReactNode, useState } from 'react';
import { db } from '../../config/firebase.config';
import { CategoryConverter } from '../../converts/firestore.converts';
import ICategoryType from '../../types/category.types';

interface ICategoryContext {
  categories: ICategoryType[];
  getCategories: () => Promise<void>;
  isLoading: boolean;
}

interface ICategoryContextProvider {
  children: ReactNode;
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  getCategories: () => Promise.resolve(),
  isLoading: false
});


function CategoryContextProvider({ children }: ICategoryContextProvider) {
  const [categories, setCategories] = useState<ICategoryType[]>([]);
  const [isLoading, setIsloading] = useState(false);

  async function getCategories() {
    try {

      setIsloading(true);

      const categoriesFromFirestore: ICategoryType[] = [];
      const querySnapshot = await getDocs(collection(db, 'categories').withConverter(CategoryConverter));

      querySnapshot.forEach(category => {
        categoriesFromFirestore.push(category.data());
      });

      setCategories(categoriesFromFirestore);

    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }

  return (
    <CategoryContext.Provider value={{ categories, getCategories, isLoading }}>
      {children}
    </CategoryContext.Provider>
  );

}

export default CategoryContextProvider;
