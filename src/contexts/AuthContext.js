import React, { useState, useEffect } from 'react'
import { firebaseAuth } from '../Config/firebaseConfig';
import UserService from '../Services/UserService';

export const AuthContext = React.createContext();
export const AuthProvider = (props) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscriber = firebaseAuth
                                .onAuthStateChanged(user => {
                                    if(user) {
                                        UserService.getUserDataByUid(user.uid)
                                            .on('value', userChange)
                                    }
                                });
        return unsubscriber;
    }, []);

    const userChange = (items) => {
        items.forEach(item => {
            let data = item.val();
            setUser(data);
        });
    }

    return (
        <AuthContext.Provider value={[user, setUser]}>
            { props.children }
        </AuthContext.Provider>
    )
}
