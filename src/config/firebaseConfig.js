import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCLAmgB3kUWLZ-jOkqseX8yeCcO2omsyAc",
    authDomain: "tshirtprintapp.firebaseapp.com",
    databaseURL: "https://tshirtprintapp.firebaseio.com",
    projectId: "tshirtprintapp",
    storageBucket: "tshirtprintapp.appspot.com",
    messagingSenderId: "554050629631",
    appId: "1:554050629631:web:b5b65367b1aa889b5841ca",
    measurementId: "G-FPCTF3WWVY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {storage, firebase as default}