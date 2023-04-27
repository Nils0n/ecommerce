import ProductType from './product.types';

interface ICategoryType{
  id:string;
  name:string;
  displayName:string;
  imageUrl:string;
  products:ProductType[];
}

export default ICategoryType;
