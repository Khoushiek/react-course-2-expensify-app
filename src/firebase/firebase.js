import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {firebase, googleAuthProvider, facebookAuthProvider, database as default};

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//   description: "rent",
//   amount: 25000,
//   createdAt: moment(0).subtract("4", "days").valueOf(),
//   note: ""
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(`${snapshot.val().name} is a ${snapshot.val().job.role} at ${snapshot.val().job.company}`);
// }, (e) => {
//   console.log("Error in fetching data", e);
// });

// setTimeout(() => {
//   database.ref('name').set('Lekha')
// },
//   3500
// );

// setTimeout(() => {
//   console.log(onValueChange);
//   database.ref().off("value", onValueChange);
// },
//   7000
// );

// setTimeout(() => {
//   database.ref('job/company').set('Infosys');
// },
//   10000
// );



// database.ref().set({
//   name: "Khoushiek",
//   isSingle: false,
//   stressLevel: 6,
//   job: {
//     role: 'Software Developer',
//     company: 'Google'
//   },
//   location : {
//     city: 'Erode',
//     country: 'India'
//   }
// });

// database.ref('location/city').set('Salem');

// database.ref('attributes').set({
//   height: 181,
//   weight: 85
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log("data has been removed")
//   })
//   .catch((e) => {
//     console.log("error", e)
//   });

// database.ref().update({
//   allowance: 'Available',
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Coimbatore'
// });