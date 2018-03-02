import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyAeoKmrfHJvQp1j2D-LUtrhsnJ1xurLA9I",
   authDomain: "expensify-539e1.firebaseapp.com",
   databaseURL: "https://expensify-539e1.firebaseio.com",
   projectId: "expensify-539e1",
   storageBucket: "expensify-539e1.appspot.com",
   messagingSenderId: "1026242339669"
 };

 firebase.initializeApp(config);

const database = firebase.database();
