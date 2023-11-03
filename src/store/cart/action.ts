import * as TYPES from './types';

export const addCartProduct = (payload: any) => ({
  type: TYPES.ADD_CART_PRODUCTS,
  payload: payload,
});

export const removeCartProduct = (payload: any) => ({
  type: TYPES.REMOVE_CART_PRODUCTS,
  payload: payload,
});
