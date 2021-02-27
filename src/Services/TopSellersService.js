import { firebaseDb } from '../Config/firebaseConfig';

const db = firebaseDb.ref('/topSellers');

const getAll = () => db;
const getById = (id) => db.orderByChild('id').equalTo(id);

export default {
    getAll,
    getById
}