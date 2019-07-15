import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "[API_KEY]",
    authDomain: "react-marioplan-77fd3.firebaseapp.com",
    databaseURL: "https://react-marioplan-77fd3.firebaseio.com",
    projectId: "react-marioplan-77fd3",
    storageBucket: "",
    messagingSenderId: "493651433399",
    appId: "1:493651433399:web:c69f7aea55ec1cfa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;