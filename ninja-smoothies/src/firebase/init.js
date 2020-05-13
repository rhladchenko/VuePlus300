import firebase from 'firebase'
import firestore from 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyCA4SvhCWCgwDCdPBNO1TSYFo-mo4DJOds",
    authDomain: "vueplus300.firebaseapp.com",
    databaseURL: "https://vueplus300.firebaseio.com",
    projectId: "vueplus300",
    storageBucket: "vueplus300.appspot.com",
    messagingSenderId: "405103884738",
    appId: "1:405103884738:web:76250fba1832e53c827e5b"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
//   firebaseApp.firestore().settings({timestampsInSnapshots: true})
  
  export default firebaseApp.firestore()
