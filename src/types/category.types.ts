import ProductType from './product.types';

interface CategoryType{
  id:string;
  name:string;
  displayName:string;
  imageUrl:string;
  products:ProductType[];
}

export default CategoryType;
