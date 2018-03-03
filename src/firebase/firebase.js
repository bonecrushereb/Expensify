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

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses')
//         .once('value')
//         .then((snapshot) => {
//           const expenses = [];
//
//           snapshot.forEach((childSnapshot) => {
//             expenses.push({
//               id: childSnapshot.key,
//               ...childSnapshot.val()
//             });
//           });
//
//           console.log(expenses);
//         });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 3039834094834
// });
