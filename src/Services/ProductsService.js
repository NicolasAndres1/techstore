import firebase from './firebaseConfig';

const db = firebase.ref('/products');

const getAll = () => db;

export default {
    getAll
}