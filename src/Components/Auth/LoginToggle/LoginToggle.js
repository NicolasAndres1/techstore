import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import UserService from '../../../Services/UserService';
import firebase, { firebaseAuth } from '../../../Config/firebaseConfig';
import classnames from 'classnames';

import './LoginToggle.css';
import Input from '../../Input/Input';
import Button from '../../Button/CustomButton';
import Backdrop from '../../Backdrop/Backdrop';

const LoginToggle = (props) => {
    const loginToggleClasses = classnames({
        'login-block': true,
        'open-login': props.open,
        'close-login': !props.open
    })

    const [user, setUser] = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        clearErrors();
        firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() =>
                firebaseAuth.signInWithEmailAndPassword(email, password)
            )
            .catch(err => {
                switch(err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                };
            });
    };

    const authListener = () => {
        firebaseAuth.onAuthStateChanged(user => {
            if(user) {
                clearInputs();
                UserService.getUserDataByUid(user.uid)
                    .on('value', userChange);
            }
            else {
                setUser('');
            }
        })
    };

    useEffect(() => {
        authListener();
    }, []);

    const userChange = (items) => {
        items.forEach(item => {
            let data = item.val();
            setUser(data);
        });
    }

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    };

    const handleLogout = () => {
        firebaseAuth.signOut();
    };

    return (
        <>
            <Backdrop 
                show={props.open}
                clicked={props.closed}/>
            <div className={loginToggleClasses}>
                {user
                    ? (
                        <>
                            <h3> Hi { user.firstName } ! 👋 </h3>
                            <hr />
                            <div className='user-menu'>
                                <Link to='/'> Account Settings </Link>
                                <Link to='/'> Cart </Link>
                                <Link to='/'> Order History </Link>
                                <Link to='/'> Wish List </Link>
                            </div>
                            <hr />
                            <Button onClick={handleLogout}> Logout </Button>
                        </>
                    )
                    : (
                        <form onSubmit={handleLogin}>
                            <h3> Sign in to TechStore </h3>
                            <hr />
                            <div className='login-form-section'>
                                <Input 
                                    type='email'
                                    placeholder='Email Address'
                                    autoFocus={true}
                                    required={true}
                                    onChange={(e) => setEmail(e.target.value)}/>
                                <p className='errorMsg'> { emailError } </p>
                                <Input 
                                    type='password'
                                    placeholder='Password'
                                    required={true}
                                    onChange={(e) => setPassword(e.target.value)}/>
                                <p className='errorMsg'> { passwordError } </p>
                            </div>
                            <div>
                                <Button 
                                    type='submit'>
                                    Sign In
                                </Button>
                            </div>
                            <hr />
                            <div className='signup-section'>
                                New to TechStore?
                                <Link 
                                    onClick={props.closed}
                                    to={`/signup`}>
                                    Sign Up
                                </Link>
                            </div>
                        </form> 
                    )
                }
            </div>
        </>
    );
};

export default LoginToggle;

