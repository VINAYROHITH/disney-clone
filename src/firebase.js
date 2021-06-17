import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions'; 

const firebaseConfig = {
    apiKey: "AIzaSyD8IC7zUiaeID-8Al9gnrDayCsR4FtmqOM",
    authDomain: "disneyplus-clone-85d96.firebaseapp.com",
    projectId: "disneyplus-clone-85d96",
    storageBucket: "disneyplus-clone-85d96.appspot.com",
    messagingSenderId: "762258698808",
    appId: "1:762258698808:web:09ee4b57e70252c750accd",
    measurementId: "G-403VT4B1W6"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;




