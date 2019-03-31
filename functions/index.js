const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCSwDCgeGvRNciuz0iswVdR3eAleUO11YU",
    authDomain: "tinderpet-e6626.firebaseapp.com",
    databaseURL: "https://tinderpet-e6626.firebaseio.com",
    projectId: "tinderpet-e6626",
    storageBucket: "tinderpet-e6626.appspot.com",
    messagingSenderId: "1097994143386"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();