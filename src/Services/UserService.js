import { firebaseDb } from '../Config/firebaseConfig';

const docRef = firebaseDb.collection('/users');

const getUserDataByUid = (uid) => 
    docRef.doc(uid)
        .get()
        .then(res => res.data());
    
const saveUser = (userData) => 
    docRef.doc(userData.uid)
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