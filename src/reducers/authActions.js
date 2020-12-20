import { firebase, googleAuthProvider } from '../services/firebase';
import { authTypes } from './authReducer';

export const loginWithEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCred) => {
        dispatch(
          loginAction(userCred.user.uid, userCred.user.displayName)
        );
      })
      .catch(console.error);
  };
};

export const loginWithGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then((userCred) => {
        dispatch(
          loginAction(userCred.user.uid, userCred.user.displayName)
        );
      });
  };
};

const loginAction = (uid, displayName) => ({
  type: authTypes.login,
  payload: {
    uid,
    displayName,
  },
});
