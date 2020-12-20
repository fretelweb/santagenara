export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case authTypes.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case authTypes.logout:
      return {};
    default:
      return state;
  }
};

export const authTypes = {
  login: '[auth] login',
  logout: '[auth] logout',
};
