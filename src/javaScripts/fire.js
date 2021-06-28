import firebase from "firebase/app";
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBPbTOZtpNZBemyXNPYcJn0DxMha9zX1F0",
  authDomain: "test-games-cd6c1.firebaseapp.com",
  projectId: "test-games-cd6c1",
  storageBucket: "test-games-cd6c1.appspot.com",
  messagingSenderId: "648680393325",
  appId: "1:648680393325:web:4f3ccd4cbfb75589334d64",
  measurementId: "G-PJ2LGJHF1K",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
