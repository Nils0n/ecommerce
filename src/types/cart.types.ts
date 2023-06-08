import IProductType from './product.types';

interface ICartProductType extends IProductType{
  quantity: number;
}

export default ICartProductType;
