import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBExWAJpozBWvZt-hb8yERjzorvdvfrutw",
    authDomain: "businesscard-cd740.firebaseapp.com",
    projectId: "businesscard-cd740",
    storageBucket: "businesscard-cd740.appspot.com",
    messagingSenderId: "514367982615",
    appId: "1:514367982615:web:4d486c53c6b20241412052",
    measurementId: "G-HR58QNS6EL"
  };

firebase.initializeApp(firebaseConfig);