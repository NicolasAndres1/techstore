import { firebaseDb } from '../Config/firebaseConfig';

const docRef = firebaseDb.collection('/bestDeals');

const getAll = () => 
    docRef.get()
        .then(res => res.docs.map(doc => doc.data()));

export default {
    getAll
}