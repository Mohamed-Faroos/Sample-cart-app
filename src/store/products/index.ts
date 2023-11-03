import * as TYPES from './types';
import {ProductData} from '../../constants/interfaces/product';

const initialState: ProductData = {
  loading_products: false,
  products: [],
  error_products: null,
};

const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TYPES.GET_PRODUCTS:
      return {
        ...state,
        loading_products: true,
      };
    case TYPES.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading_products: false,
        error_products: null,
        products: action.payload,
      };
    case TYPES.GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading_products: false,
        error_products: action.payload,
      };
    case TYPES.GET_PRODUCTS_CLEAR:
      return {
        ...state,
        loading_products: false,
        products: [],
        error_products: null,
      };
    default:
      return state;
  }
};

export default productsReducer;
