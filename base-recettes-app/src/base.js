import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDE9u77O5QDJrrWakp8hXW21-uRUYe_wVY",
  authDomain: "my-recettes.firebaseapp.com",
  databaseURL: "https://my-recettes-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
