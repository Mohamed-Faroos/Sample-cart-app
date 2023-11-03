import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducers from './rootReducer';

const persistConfig = {
  key: 'wire-app',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
