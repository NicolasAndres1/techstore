import React, { useContext, useState, useEffect } from 'react'
import { firebaseAuth } from '../Config/firebaseConfig';

export const AuthContext = React.createContext();
export const AuthProvider = (props) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscriber = firebaseAuth
                                .onAuthStateChanged(user => setUser(user));

        return unsubscriber;
    }, []);

    return (
        <AuthContext.Provider value={[user, setUser]}>
            { props.children }
        </AuthContext.Provider>
    )
}
