import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDNdZ_UrAazx9k3MDchsP5_rWRz4-_JAbE",
    authDomain: "mcity-b7a59.firebaseapp.com",
    projectId: "mcity-b7a59",
    storageBucket: "mcity-b7a59.appspot.com",
    messagingSenderId: "770210126044",
    appId: "1:770210126044:web:515d5d4265ded816e4bc19",
    measurementId: "G-079V3R8ZF3"
  };

firebase.initializeApp(firebaseConfig);

export {
    firebase
}