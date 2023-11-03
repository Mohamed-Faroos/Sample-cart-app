import * as TYPES from './types';

export const getProducts = () => ({
  type: TYPES.GET_PRODUCTS,
});

export const getProductsSuccess = (payload: any) => ({
  type: TYPES.GET_PRODUCTS_SUCCESS,
  payload: payload,
});

export const getProductsError = (error: any) => ({
  type: TYPES.GET_PRODUCTS_ERROR,
  payload: error,
});

export const getProductsClear = () => ({
  type: TYPES.GET_PRODUCTS_CLEAR,
});
