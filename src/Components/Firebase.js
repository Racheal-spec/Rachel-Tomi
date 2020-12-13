import firebase from 'firebase';

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAp7EKCVuogaarv3H63qoqPyuxSdOQtaAk",
    authDomain: "racheltomi-2ab4e.firebaseapp.com",
    projectId: "racheltomi-2ab4e",
    storageBucket: "racheltomi-2ab4e.appspot.com",
    messagingSenderId: "311726182801",
    appId: "1:311726182801:web:afd2fad3232a550c12ca30",
    measurementId: "G-W0B8YHDLY5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();

  export {db};