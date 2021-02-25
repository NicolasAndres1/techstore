import React, { useState, useEffect } from 'react'

const auth = props => {
    const [authForm, setAuthForm] = useState({
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'pass',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    })
    const [isSignup, setIsSignup] = useState(true);

    return (
        <div>
            <form>

            </form>
        </div>
    );
};

export default auth;