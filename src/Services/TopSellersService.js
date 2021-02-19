import firebase from './firebaseConfig';

const db = firebase.ref('/topSellers');

const getAll = () => db;
const getById = (id) => db.orderByChild('id').equalTo(id);

export default {
    getAll,
    getById
}