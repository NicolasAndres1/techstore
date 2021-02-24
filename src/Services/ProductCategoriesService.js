import firebase from './firebaseConfig';

const db = firebase.ref('/productCategories');

const getAll = () => db;

export default {
    getAll
}