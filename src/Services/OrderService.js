import { firebaseDb } from '../Config/firebaseConfig';

const docRef = firebaseDb.collection('/orders');

const saveOrder = (order) =>
    docRef.doc()
        .set({
            id: order.id,
            uid: order.uid,
            country: order.country,
            firstName: order.firstName,
            lastName: order.lastName,
            address: order.address,
            addressOpt: order.addressOpt,
            city: order.city,
            stateProvince: order.stateProvince,
            zipCode: order.zipCode,
            phone: order.phone,
            cardNumber: order.cardNumber,
            cardHolderName: order.cardHolderName,
            cardMonthExpirity: order.cardMonthExpirity,
            cardYearExpirity: order.cardYearExpirity,
            cvv: order.cvv,
            cartItems: order.cartItems,
            totalCartPrice: order.totalCartPrice
        });

const getOrdersByUid = (uid) =>
    docRef.where('uid', '==', uid)
        .get()
        .then(res => res.docs.map(doc => doc.data()))

export default {
    saveOrder,
    getOrdersByUid
}