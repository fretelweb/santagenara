const initialState = {
  items: [],
  count: 0,
  total: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartTypes.add:
      const item = state.items.find(
        (item) => item.id === action.payload.id
      );
      let newItems = [];
      if (!item) {
        newItems = [...state.items, { ...action.payload, cantidad: 1 }];
      } else {
        item.cantidad++;
        newItems = state.items.concat();
      }
      return {
        ...state,
        items: newItems,
        count: newItems.length,
        total: newItems.reduce(
          (a, b) => (a = a + b.precio * b.cantidad),
          0
        ),
      };
    case cartTypes.remove:
      break;
    default:
      return state;
  }
};

export const cartTypes = {
  add: '[Cart] Add',
  remove: '[Cart] Remove',
};
