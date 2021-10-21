import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDP0XtNfJ5LyFYIjS2MXeQdfb1SbicaqMQ",
  authDomain: "saviourdrone-4696c.firebaseapp.com",
  databaseURL: "https://saviourdrone-4696c-default-rtdb.firebaseio.com",
  projectId: "saviourdrone-4696c",
  storageBucket: "saviourdrone-4696c.appspot.com",
  messagingSenderId: "788950242504",
  appId: "1:788950242504:web:ffac102c573d729b7dc1fd",
  measurementId: "G-CFCFJW48X9",
};

var fire = firebase.initializeApp(firebaseConfig);
export default fire;
