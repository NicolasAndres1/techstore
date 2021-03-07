import React, { useContext } from 'react';
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const UserLoguedRoute = ({ component: Component, ...rest }, props) => {
    const [user, setUser] = useContext(AuthContext);

    return (
        <Route 
            {...rest} 
            render={props => 
                !user 
                    ? <Component {...rest} {...props} />
                    : <Redirect to={'/home'}/>
            }
        />
    )
}

export default UserLoguedRoute;