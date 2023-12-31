import {combineReducers} from 'redux';

import productsReducer from './products';
import cartReducer from './cart';

const rootReducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducers;
