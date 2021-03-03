import { firebaseDb } from '../Config/firebaseConfig';

const docRef = firebaseDb.collection('/categories');

const getAllCategories = () => 
    docRef
        .orderBy('position')
        .get()
        .then(res => res.docs.map(doc => doc.data()));

const getItemTypesByCategory = (category, subCategory) => 
    docRef.doc(category)
        .get()
        .then(res => res.data().subCategories[subCategory].itemTypes)

export default {
    getAllCategories,
    getItemTypesByCategory
}