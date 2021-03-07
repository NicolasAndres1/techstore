import React, { useState, useEffect, useContext } from 'react';
import firebase ,{ firebaseAuth } from '../../../Config/firebaseConfig';
import { Redirect, useHistory } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import UserService from '../../../Services/UserService';

import './Login.css';
import Input from '../../Input/Input';
import Button from '../../Button/CustomButton';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';

const Login = () => {
    const history = useHistory();
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

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    };

    const authListener = () => {
        firebaseAuth.onAuthStateChanged(user => {
            if(user) {
                clearInputs();
                    UserService.getUserDataByUid(user.uid)
                        .then(res => {
                            setUser(res)
                        })
                        .catch(err => console.error('fallito'));
            }
            else {
                setUser('');
            }
        })
    };

    useEffect(() => {
        authListener();
    }, []);


    return (
        <>
            <form onSubmit={handleLogin} className='signup'>
                <Logo />
                <h1> Sign In </h1>
                <div className='signup-form-wrapper'>
                    <div className='signup-form'>
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
                </div>
                {!user
                    ? (
                        <>
                            <Button 
                                type='submit'>
                                Sign In
                            </Button>
                            <div className='text-near-signup'>
                                New To TechStore? <Link to={'/signup'}> Sign Up </Link>
                            </div>
                        </>
                    )
                    : (
                        <Redirect to='/home' />
                    )
                }
            </form>
        </>
    );
}

export default Login;