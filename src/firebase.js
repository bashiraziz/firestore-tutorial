// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from "firebase";
import { getFirestore } from 'firebase/firestore'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
 apiKey: "AIzaSyBir2mtiigazfLZOGZeqgHAOS8qJwjg5bQ",
 authDomain: "testproject-52328.firebaseapp.com",
 databaseURL: "https://testproject-52328-default-rtdb.firebaseio.com",
 projectId: "testproject-52328",
 storageBucket: "testproject-52328.appspot.com",
 messagingSenderId: "224447652153",
 appId: "1:224447652153:web:768391e0f56dc957dac8e8",
 measurementId: "G-ZHQMJSGM8L"
};;

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = getFirestore;
const db = firebase.firestore();
  
export default db;