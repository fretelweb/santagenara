import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from './authReducer';
import { cartReducer } from './cartReducer';
import { productsReducer } from './productsReducer';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  products: productsReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
