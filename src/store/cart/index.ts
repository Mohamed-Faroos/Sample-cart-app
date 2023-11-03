import * as TYPE from './types';
import {CartProductData, ICartProduct} from '../../constants/interfaces/cart';

const initialState: CartProductData = {
  cart: [],
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TYPE.ADD_CART_PRODUCTS:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case TYPE.REMOVE_CART_PRODUCTS:
      return {
        ...state,
        cart: state.cart.filter(
          (item: ICartProduct) => item.cartId !== action.payload.cartId,
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
