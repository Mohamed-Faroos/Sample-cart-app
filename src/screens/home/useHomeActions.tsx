/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../store/useStore';
import {
  getProducts,
  getProductsClear,
  getProductsError,
  getProductsSuccess,
} from '../../store/products/action';
import {getProductsAPI} from '../../services/productServices';

const useHomeActions = () => {
  const stateProducts = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  /* The `getProductList` function is a callback function that is created using the
`useCallback` hook. It is responsible for fetching the list of products from
the API and dispatching the appropriate actions to update the state. */
  const getProductList = useCallback(async () => {
    try {
      dispatch(getProducts());
      const result = await getProductsAPI();
      dispatch(getProductsSuccess(result.data.data));
    } catch (error: any) {
      dispatch(getProductsError(error));
    }
  }, []);

  /* The `useEffect` hook is used to perform side effects in a functional
 component. In this case, it is used to call the `getProductList` function when
 the component mounts or when the `getProductList` function changes. */
  useEffect(() => {
    dispatch(getProductsClear());
    getProductList();
  }, [getProductList]);

  return {stateProducts};
};

export default useHomeActions;
