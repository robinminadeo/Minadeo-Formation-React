import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBGI9sZnk5WfPLLOi_We9LRNrx0rENM0h4",
    authDomain: "my-chatbox-b3201.firebaseapp.com",
    databaseURL: "https://my-chatbox-b3201-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base