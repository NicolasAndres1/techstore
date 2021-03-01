import { firebaseDb } from '../Config/firebaseConfig';

const db = firebaseDb.ref('/products');

const PRODUCTS = 'products';
const NEWRELEASES = 'newReleases';
const BESTDEALS = 'bestDeals'
const TOPSELLERS = 'topSellers'

const getAll = () => db;
const getById = (id) => db.child(PRODUCTS).orderByChild('id').equalTo(id);
const getTopSellers = () => db.child(TOPSELLERS);
const getBestDeals = () => db.child(BESTDEALS);
const getNewReleases = () => db.child(NEWRELEASES);
const getByCategory = (category) => db.child(PRODUCTS).orderByChild('category').equalTo(category);
const getByItemType = (itemType) => db.child(PRODUCTS).orderByChild('itemType').equalTo(itemType);

export default {
    getAll,
    getById,
    getTopSellers,
    getBestDeals,
    getNewReleases,
    getByCategory
}