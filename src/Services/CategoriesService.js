import { firebaseDb } from '../Config/firebaseConfig';

const db = firebaseDb.ref('/categories');

const getAllCategories = () => db.orderByChild('position');

export default {
    getAllCategories
}