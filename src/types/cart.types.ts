import IProductType from './product.types';

interface CartProductType extends IProductType{
  quantity: number;
}

export default CartProductType;
