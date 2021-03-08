import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { CartContext } from '../../../contexts/CartContext';
import UserService from '../../../Services/UserService';
import firebase, { firebaseAuth } from '../../../Config/firebaseConfig';

import './LoginPopUp.css';

import Input from '../../Input/Input';
import Button from '../../Button/CustomButton';

const LoginPopUp = (props) => {
    const [user, setUser] = useContext(AuthContext);
    const [cart, setCart] = useContext(CartContext);
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
                setTimeout(() => {
                    UserService.getUserDataByUid(user.uid)
                        .then(res => {
                            setUser(res)
                        })
                        .catch(err => console.error(err));
                }, 1500);
            }
            else {
                setUser('');
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

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
        setCart([]);
    };

    return (
        <>
            {user
                ? (
                    <>
                        <h3> Hi { user.firstName } ! 👋 </h3>
                        <hr />
                        <div className='user-menu'>
                            <Link 
                                to='/shopping/cart'
                                onClick={props.closed}> Cart </Link>
                            <Link 
                                to='/order-history'
                                onClick={props.closed}> Order History </Link>
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
        </>
    )
}

export default LoginPopUp;
