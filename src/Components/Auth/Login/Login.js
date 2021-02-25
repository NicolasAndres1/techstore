import React, { useState } from 'react';

import './Login.css';
import Input from '../../Input/Input';
import Button from '../../Button/CustomButton';

const Login = () => {
    const [user, setUser] = useState({
        user: null,
        isSignedIn: false
    });

    return (
        <div className='login-block'>
            <h3> Login to TechStore </h3>
            <hr />
            <div className='login-form-section'>
                <Input placeholder='E-mail'/>
                <Input placeholder='Password'/>
            </div>
            <div>
                <Button>
                    Login
                </Button>
            </div>
            <hr />
            {user.isSignedIn 
                ? <p> adentro </p> 
                : <p> quien te conoce? </p>
            }
        </div>

    );
};

export default Login;

