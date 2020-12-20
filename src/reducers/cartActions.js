import { cartTypes } from './cartReducer';

export const addItem = (item) => ({
  type: cartTypes.add,
  payload: item,
});
