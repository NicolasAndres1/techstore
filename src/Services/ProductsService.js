import { firebaseDb } from '../Config/firebaseConfig';

const docRef = firebaseDb.collection('/products');

const getById = (id) =>
    docRef.doc(id)
        .get()
        .then(res => res.data());

const getByCategory = (category) => 
    docRef.where('category', '==', category)
        .get()
        .then(res => res.docs.map(doc => doc.data()));


const getByItemTypes = (itemType) => 
    docRef.where('subCategory', 'in', itemType)
        .get()
        .then(res => res.docs.map(doc => doc.data()));


export default {
    getById,
    getByCategory,
    getByItemTypes
}