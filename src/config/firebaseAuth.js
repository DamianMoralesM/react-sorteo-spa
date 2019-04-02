import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCSwDCgeGvRNciuz0iswVdR3eAleUO11YU",
    authDomain: "tinderpet-e6626.firebaseapp.com",
    databaseURL: "https://tinderpet-e6626.firebaseio.com",
    projectId: "tinderpet-e6626",
    storageBucket: "tinderpet-e6626.appspot.com",
    messagingSenderId: "1097994143386"
  };
const fire = firebase.initializeApp(config);
export default fire;