import React, { useState, useEffect } from 'react'
import { firebaseAuth } from '../Config/firebaseConfig';
import UserService from '../Services/UserService';

export const AuthContext = React.createContext();
export const AuthProvider = (props) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscriber = firebaseAuth
                                .onAuthStateChanged(user => {
                                    if(user) {;
                                        UserService.getUserDataByUid(user.uid)
                                            .then(res => setUser(res))
                                            .catch(err => console.error(err));
                                    }
                                });
        return unsubscriber;
    }, []);

    return (
        <AuthContext.Provider value={[user, setUser]}>
            { props.children }
        </AuthContext.Provider>
    )
}
