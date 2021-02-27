import { firebaseDb } from '../Config/firebaseConfig';

const db = firebaseDb.ref('/productCategories');

const getAll = () => db;

export default {
    getAll
}