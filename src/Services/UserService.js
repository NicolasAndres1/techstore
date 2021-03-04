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
            cartItems: []
        });

const updateItemsOnCart = (userUid, cart) =>
    docRef.doc(userUid)
        .update({
            'cartItems': cart
        });

export default {
    getUserDataByUid,
    saveUser,
    updateItemsOnCart
}