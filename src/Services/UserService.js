import { firebaseDb } from '../Config/firebaseConfig';

const db = firebaseDb.ref('/users');

const saveUser = (userData) => db.child(userData.uid)
                                 .set({
                                    firstName: userData.firstName,
                                    lastName: userData.lastName,
                                    cartItems: {}
                                 });

export default {
    saveUser
}