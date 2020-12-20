const initialState = {
  products: [],
  loading: false,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case productsTypes.setLoading:
      return {
        ...state,
        loading: true,
      };
    case productsTypes.unsetLoading:
      return { ...state, loading: false };

    case productsTypes.setData:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const productsTypes = {
  setLoading: '[PRODUCTS] Set Loading',
  unsetLoading: '[PRODUCTS] Unset Loading',
  setData: '[PRODUCTS] Set Data',
};
