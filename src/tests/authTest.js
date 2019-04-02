var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyCSwDCgeGvRNciuz0iswVdR3eAleUO11YU",
    authDomain: "tinderpet-e6626.firebaseapp.com",
    databaseURL: "https://tinderpet-e6626.firebaseio.com",
    projectId: "tinderpet-e6626",
    storageBucket: "tinderpet-e6626.appspot.com",
    messagingSenderId: "1097994143386"
  };


const fire = firebase.initializeApp(config);
const email = 'test@gmail.com'
const password = 'qwerty'
/*
fire.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  */

 fire.auth().signInWithEmailAndPassword(email, password).then(param => {console.log(param.user.uid)})
 .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
/*
  fire.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });

  */