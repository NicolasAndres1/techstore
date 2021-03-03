import * as firebase from 'firebase';
import 'firebase/database';

let app = firebase.initializeApp({
    apiKey: "AIzaSyCO30bCMOmUduyHGDxERp439U5Dheb-CaY",
    authDomain: "techstore-46ea5.firebaseapp.com",
    databaseURL: "https://techstore-46ea5-default-rtdb.firebaseio.com",
    projectId: "techstore-46ea5",
    storageBucket: "techstore-46ea5.appspot.com",
    messagingSenderId: "483142781479",
    appId: "1:483142781479:web:34de55f3f40ef64ffb1c02",
    measurementId: "G-VGCDD9DYC3"
});

export const firebaseDb = app.firestore();
export const firebaseAuth = app.auth();
export default firebase;
