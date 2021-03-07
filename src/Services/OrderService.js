import { firebaseDb } from '../Config/firebaseConfig';

const docRef = firebaseDb.collection('/orders');

const saveOrder = (order) =>
    docRef.doc()
        .set({order});

export default {
    saveOrder
}