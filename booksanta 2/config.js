import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5dp0buY2kKkmG5xGz4U5sHsJAKnATPaM",
  authDomain: "booksanta-21aa0.firebaseapp.com",
  projectId: "booksanta-21aa0",
  storageBucket: "booksanta-21aa0.appspot.com",
  messagingSenderId: "584840105566",
  appId: "1:584840105566:web:dc70ac144f737564156ecf",
  measurementId: "G-MKWNDD3LP6"
};
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
