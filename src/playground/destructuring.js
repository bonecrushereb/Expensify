//
// Object destructuring
//

// const person = {
//   name: 'Ben',
//   age: 30,
//   location: {
//     city: 'Lynnwood',
//     temp: 47
//   }
// };
//
// const {name: firstName = 'anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);
//
// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }
//
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'penguin'
//   }
// };
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(`${publisherName}`);

//
//Arrray destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state] = address;

console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);
