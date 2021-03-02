import { firebaseDb } from '../Config/firebaseConfig';

const docRef = firebaseDb.collection('/products');

const PRODUCTS = 'products';
const NEWRELEASES = 'newReleases';
const BESTDEALS = 'bestDeals'
const TOPSELLERS = 'topSellers'

const getById = (id) =>
    docRef.doc(id)
        .get()
        .then(res => res.data());

const getByCategory = (category) => 
    docRef.where('category', '==', category)
        .get()
        .then(res => res.docs.map(doc => doc.data()))

// const getByItemType = (itemType) => db.child(PRODUCTS).orderByChild('itemType').equalTo(itemType);

export default {
    getById,
    getByCategory
    // getByItemType
}