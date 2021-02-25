import firebase from '../Config/firebaseConfig';

const db = firebase.ref('/categories');

const getAllCategories = () => db.orderByChild('position');

export default {
    getAllCategories
}