import { firebaseDb } from '../Config/firebaseConfig';

const docRef = firebaseDb.collection('/categories');

const getAllCategories = () => 
    docRef
        .orderBy('position')
        .get()
        .then(res => res.docs.map(doc => doc.data()));

// const getItemTypesByCategory = (category, subCategory) => db.orderByChild('link');

export default {
    getAllCategories
}