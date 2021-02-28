import { firebaseDb } from '../Config/firebaseConfig';

const db = firebaseDb.ref('/users');

const getUserDataByUid = (uid) => db.orderByChild('uid').equalTo(uid);
const saveUser = (userData) => db.child(userData.uid)
                                 .set({
                                    uid: userData.uid,
                                    firstName: userData.firstName,
                                    lastName: userData.lastName,
                                    email: userData.email,
                                    cartItems: {}
                                 });

export default {
    getUserDataByUid,
    saveUser
}