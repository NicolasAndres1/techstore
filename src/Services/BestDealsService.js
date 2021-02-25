import firebase from '../Config/firebaseConfig';

const db = firebase.ref('/bestDeals');

const getAll = () => db;
const getById = (key) => db.equalTo(key);

export default {
    getAll,
    getById
}