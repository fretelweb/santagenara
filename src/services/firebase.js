import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC_WgnvXDpzRRTALu4bz_uL8qus0-pY7Wo',
  authDomain: 'santagenara-77847.firebaseapp.com',
  projectId: 'santagenara-77847',
  storageBucket: 'santagenara-77847.appspot.com',
  messagingSenderId: '652418589980',
  appId: '1:652418589980:web:a3e6a3db6db8203c3906d9',
  measurementId: 'G-S1GZKPD30Q',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };

// firebase.auth().signInWithPopup()
