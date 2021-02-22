import firebase from './firebaseConfig';

const db = firebase.ref('/products');

const getAll = () => db;
const getByUrl = (url) => db.orderByChild('url').equalTo(url);
const getTopSellers = () => db.child('topSellers');
const getNewReleases = () => db.child('newReleases');

export default {
    getAll,
    getByUrl,
    getTopSellers,
    getNewReleases
}