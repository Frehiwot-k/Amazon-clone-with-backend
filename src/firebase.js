// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "api key",
    authDomain: "clone",
    projectId: "clone",
    storageBucket: "clone",
    messagingSenderId: "",
    appId: "clone",
    measurementId: "clone"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
