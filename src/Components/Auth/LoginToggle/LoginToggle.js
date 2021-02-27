import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { firebaseAuth } from '../../../Config/firebaseConfig';
import classnames from 'classnames';

import './LoginToggle.css';
import Input from '../../Input/Input';
import Button from '../../Button/CustomButton';
import Backdrop from '../../Backdrop/Backdrop';

const LoginToggle = (props) => {
    const attachedClasses = classnames('sidedrawer', {
        'open': props.open,
        'close': !props.open
    })

    const [user, setUser] = useContext(AuthContext);

    const handleLogout = () => {
        firebaseAuth.signOut();
    };

    return (
        <>
            {/* <Backdrop 
                show={props.open}
                clicked={props.close}/> */}
            {user
                ? (
                    <Button onClick={handleLogout}> Logout </Button>
                )
                : (
                    <div className='login-block'>
                        <h3> Login to TechStore </h3>
                        <hr />
                        <div className='login-form-section'>
                            <Input 
                                type='email'
                                placeholder='E-mail'/>
                            <Input 
                                type='password'
                                placeholder='Password'/>
                        </div>
                        <div>
                            <Button>
                                Login
                            </Button>
                        </div>
                        <hr />
                        <div className='signup-section'>
                            New to TechStore?
                            <Link 
                                onClick={props.close}
                                to={`/signup`}>
                                Sign Up
                            </Link>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default LoginToggle;

