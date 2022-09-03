// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app' // no compat for new SDK
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3caYsGtrH-VGf7kRkhnyLl7WqgLaaX1M",
  authDomain: "birthday-bash-80dc5.firebaseapp.com",
  databaseURL: "https://birthday-bash-80dc5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "birthday-bash-80dc5",
  storageBucket: "birthday-bash-80dc5.appspot.com",
  messagingSenderId: "1007202895956",
  appId: "1:1007202895956:web:746cd6bcdce389447885c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
export default database