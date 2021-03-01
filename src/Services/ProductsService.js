import { firebaseDb } from '../Config/firebaseConfig';

const db = firebaseDb.ref('/products');

const getAll = () => db;
const getById = (id) => db.child('products').orderByChild('id').equalTo(id);
const getTopSellers = () => db.child('topSellers');
const getBestDeals = () => db.child('bestDeals');
const getNewReleases = () => db.child('newReleases');

export default {
    getAll,
    getById,
    getTopSellers,
    getBestDeals,
    getNewReleases
}