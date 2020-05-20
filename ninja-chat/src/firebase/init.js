import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDjdtTPBkvDRXIga27gl7VgMhkZTol0SJs",
    authDomain: "vueplus300-ninja-chat.firebaseapp.com",
    databaseURL: "https://vueplus300-ninja-chat.firebaseio.com",
    projectId: "vueplus300-ninja-chat",
    storageBucket: "vueplus300-ninja-chat.appspot.com",
    messagingSenderId: "397905671123",
    appId: "1:397905671123:web:45a2a8fd1cb0eb0b7af526",
    measurementId: "G-YXEJ9K49Q0"
  };
  // Initialize Firebase
  const firebaseApp =  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebaseApp.firestore()