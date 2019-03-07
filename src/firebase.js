import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBpuOHxb_doD_pdvWxmi6X00XZTheY6jwA",
    authDomain: "react-weather-racer12.firebaseapp.com",
    databaseURL: "https://react-weather-racer12.firebaseio.com",
    projectId: "react-weather-racer12",
    storageBucket: "react-weather-racer12.appspot.com",
    messagingSenderId: "434635472501"
  };
  firebase.initializeApp(config);

  export default firebase;
