import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseApp = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider()
};

const firebaseAppAuth = firebase.initializeApp(firebase);

export default {firebaseAppAuth, providers};