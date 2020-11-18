import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyALo8v1KhbWwreebPtW1GGGcFsLmMcPAz0",
  authDomain: "netflix-clone-5fd7f.firebaseapp.com",
  databaseURL: "https://netflix-clone-5fd7f.firebaseio.com",
  projectId: "netflix-clone-5fd7f",
  storageBucket: "netflix-clone-5fd7f.appspot.com",
  messagingSenderId: "12550779783",
  appId: "1:12550779783:web:d22b8aa3964fb6b68e5922"
}

const firebase = Firebase.initializeApp(config);

export { firebase };