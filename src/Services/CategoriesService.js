import firebase from './firebaseConfig';

const db = firebase.ref('/categories');

const getAllCategories = () => db.orderByChild('position');

export default {
    getAllCategories
}