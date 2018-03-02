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

database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 3039834094834
});

database.ref('expenses').push({
  description: 'Gas Bill',
  note: '',
  amount: 16000,
  createdAt: 3039834094834
});

database.ref('expenses').push({
  description: 'Foot',
  note: '',
  amount: 15000,
  createdAt: 3039834094834
});
