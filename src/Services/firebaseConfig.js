import * as firebase from 'firebase';
import 'firebase/database'

let config = {
    apiKey: "AIzaSyCO30bCMOmUduyHGDxERp439U5Dheb-CaY",
    authDomain: "techstore-46ea5.firebaseapp.com",
    databaseURL: "https://techstore-46ea5-default-rtdb.firebaseio.com",
    projectId: "techstore-46ea5",
    storageBucket: "techstore-46ea5.appspot.com",
    messagingSenderId: "483142781479",
    appId: "1:483142781479:web:4d2440eb83f55ac3fb1c02",
    measurementId: "G-GQP08WTFNB"
}

firebase.initializeApp(config);

export default firebase.database();