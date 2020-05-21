import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyC6HVsxGwAR7bTga-Cd5mRrEmjgq33FYys",
    authDomain: "vueplus300-geo-ninjas.firebaseapp.com",
    databaseURL: "https://vueplus300-geo-ninjas.firebaseio.com",
    projectId: "vueplus300-geo-ninjas",
    storageBucket: "vueplus300-geo-ninjas.appspot.com",
    messagingSenderId: "194334444613",
    appId: "1:194334444613:web:77176526fcc078f18c672c"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()
