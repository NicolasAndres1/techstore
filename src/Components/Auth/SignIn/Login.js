import React, { useState, useEffect, useContext } from 'react';
import firebase ,{ firebaseAuth } from '../../../Config/firebaseConfig';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

import './Login.css';
import Input from '../../Input/Input';
import Button from '../../Button/CustomButton';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';

const Login = () => {
    const [user, setUser] = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

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

    const authListener = () => {
        firebaseAuth.onAuthStateChanged(user => {
            if(user) {
                clearInputs();
                setUser(user);
            }
            else {
                setUser('');
            }
        })
    };

    useEffect(() => {
        authListener();
    }, []);

    const handleLogin = () => {
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

    return (
        <>
            <div className='signup'>
                <div className='logo-wrapper'>
                    <Logo />
                </div>
                <h2> Sign In </h2>
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
                                type='button'
                                onClick={handleLogin}>
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
            </div>
        </>
    );
}

export default Login;