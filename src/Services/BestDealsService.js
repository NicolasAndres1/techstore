import { firebaseDb } from '../Config/firebaseConfig';

const db = firebaseDb.ref('/bestDeals');

const getAll = () => db;
const getById = (key) => db.equalTo(key);

export default {
    getAll,
    getById
}