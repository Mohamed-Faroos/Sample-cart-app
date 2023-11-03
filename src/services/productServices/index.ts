import {axiosInstance} from '..';
import {GET_PRODUCTS_API_URL} from './endPoints';

/* get product api call */
export const getProductsAPI = async () => {
  return await axiosInstance({
    method: 'get',
    url: GET_PRODUCTS_API_URL,
  });
};
