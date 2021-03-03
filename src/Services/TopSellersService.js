import { firebaseDb } from '../Config/firebaseConfig';

const docRef = firebaseDb.collection('/topSellers');

const getAll = () => 
    docRef.get()
        .then(res => res.docs.map(doc => doc.data()));

export default {
    getAll
}