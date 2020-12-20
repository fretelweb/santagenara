import { items } from '../data/productos';
import { productsTypes } from './productsReducer';

export const startLoading = () => ({
  type: productsTypes.setLoading,
});

export const finishLoading = () => ({
  type: productsTypes.unsetLoading,
});

const fetchProductsAction = (items) => ({
  type: productsTypes.setData,
  payload: items,
});

export const fetchProducts = () => {
  return (dispatch) => {
    const lista = items;
    dispatch(fetchProductsAction(lista));
  };
};
