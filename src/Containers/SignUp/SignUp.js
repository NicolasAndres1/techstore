import React, { useEffect, useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { firebaseAuth } from '../../Config/firebaseConfig';
import { AuthContext } from "../../contexts/AuthContext";
import UserService from '../../Services/UserService';

import './SignUp.css';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/CustomButton';
import Logo from '../../Components/Logo/Logo';

const SignUp = props => {
    const [user, setUser] = useContext(AuthContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        clearErrors();
        firebaseAuth.createUserWithEmailAndPassword(email, password)
            .then((userCreated) => {
                const userToSave = {
                    uid: userCreated.user.uid,
                    lastName: lastName,
                    firstName: firstName,
                    email: userCreated.user.email 
                }
                authListener(userToSave);
                saveUserOnDatabase(userToSave);
            })
            .catch(err => {
                switch(err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                };
            });
    };

    const saveUserOnDatabase = (userCreated) => 
        UserService.saveUser(userCreated)
            .then(() =>
                console.log('guardado')
            )
            .catch(() =>
                console.log('fallo')
            )

    const authListener = (userToSave) => {
        firebaseAuth.onAuthStateChanged(userAuth => {
            if(userAuth) {
                clearInputs();
                setUser(userToSave);
            }
            else {
                setUser('');
            }
        })
    }

    return (
        <form onSubmit={handleSignUp} className='signup'>
            <Logo />
            <h1> Sign Up </h1>
            <div className='signup-form-wrapper'>
                <div className='signup-form'>
                    <Input 
                        type='text'
                        placeholder='First Name'
                        autoFocus={true}
                        required={true}
                        onChange={(e) => setFirstName(e.target.value)}/>
                    <Input 
                        type='text'
                        placeholder='Last Name'
                        required={true}
                        onChange={(e) => setLastName(e.target.value)}/>
                    <Input 
                        type='email'
                        placeholder='Email Address'
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}/>
                    <p className='errorMsg'> { emailError }  </p>
                    <Input 
                        type='password'
                        placeholder='Password'
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <p className='errorMsg'> { passwordError } </p>
                </div>
            </div>
            <div className='text-near-signup'>
                By creating an account, you agree to TechStore’s Privacy Notice and Terms of Use.
            </div>
            <Button 
                type='submit'>
                Sign Up
            </Button>
            <div className='text-near-signup'>
                Have an account? <Link to={'/signin'}> Log In </Link>
            </div>
        </form>        
    );
};

export default SignUp;