import firebase from './firebaseConfig';

const db = firebase.ref('/products');

const getAll = () => db;
const getById = (id) => db.child('products').orderByChild('id').equalTo(id);
const getTopSellers = () => db.child('topSellers');
const getNewReleases = () => db.child('newReleases');

export default {
    getAll,
    getById,
    getTopSellers,
    getNewReleases
}