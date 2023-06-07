import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';

import ICategoryType from '../../types/category.types';
import { db } from '../../config/firebase.config';
import { CategoryConverter } from '../../converts/firestore.converts';

import Loading from '../Loading';
import { Container, CategoryTitle, ProductsContainer, IconContainer } from './styles';
import ProductItem from '../ProductItem';
import { useNavigate } from 'react-router-dom';

interface ICategoryDetailsProps {
  categoryId: string;
}

function CategoryDetails({ categoryId }: ICategoryDetailsProps) {
  const [currentCategory, setCurrentCategory] = useState<ICategoryType | null>(null);
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getCategory() {
      try {
        setIsloading(true);
        const querySnapshot = await getDocs(
          query(
            collection(db, 'categories').withConverter(CategoryConverter),
            where('id', '==', categoryId)
          )
        );

        const category = querySnapshot.docs[0]?.data();
        setCurrentCategory(category);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }

    }

    getCategory();

  }, [categoryId]);

  if (isLoading) return <Loading />;

  return (
    <Container>
      <CategoryTitle onClick={() => navigate('/')}>
        <IconContainer>
          <BiChevronLeft size={36} />
        </IconContainer>
        <p>
          Explorar {currentCategory?.displayName}
        </p>
      </CategoryTitle>
      <ProductsContainer>
        {currentCategory?.products.map(product => <ProductItem key={product.id} product={product} />)}
      </ProductsContainer>
    </Container>
  );
}

export default CategoryDetails;
