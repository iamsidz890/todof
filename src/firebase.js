// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from  'firebase';


const firebaseApp = firebase.initializeApp({

 
  apiKey: "AIzaSyCsLrkdvLk4Q98uXXJRDWtDRBtxl0AbasI",
  authDomain: "todo-app-f2657.firebaseapp.com",
  databaseURL: "https://todo-app-f2657.firebaseio.com",
  projectId: "todo-app-f2657",
  storageBucket: "todo-app-f2657.appspot.com",
  messagingSenderId: "414278068332",
  appId: "1:414278068332:web:f8ace9aa261a88130a9049",
  measurementId: "G-4L6EEP5RPC"


});

const db = firebaseApp.firestore();

export default db;