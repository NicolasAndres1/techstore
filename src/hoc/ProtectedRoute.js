import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [user, setUser] = useContext(AuthContext);

    return (
        <Route 
            {...rest} 
            render={props => (
                user 
                    ? <Component {...rest} {...props} />
                    : <Redirect to='/signin'/>
            )}
        />
    )
}

export default ProtectedRoute;