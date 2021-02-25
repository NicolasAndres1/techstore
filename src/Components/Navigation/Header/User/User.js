import React, { useContext, useState } from 'react'
import classnames from 'classnames';

import './User.css';
import { CartContext } from '../../../../context/CartContext';
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Login from '../../../Auth/Login/Login';

const User = props => {
    const [cart, setCart] = useContext(CartContext);
    const [isLoginSectionOpen, setIsLoginSectionOpen] = useState(false);

    const totalCartQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

    const toggleIsLoginSectionOpen = () => setIsLoginSectionOpen(!isLoginSectionOpen);

    const isLoginSectionOpenClasses = classnames({
        'login-section': true,
        'show-login-section': isLoginSectionOpen,
        'hide-login-section': !isLoginSectionOpen
    });

    return (
        <>
            <div className='cart-button'>
                <button
                    type='button'
                    title='Cart'>
                    <FontAwesomeIcon 
                        className='FontAwesomeIcon'
                        icon={faShoppingCart}/>
                </button>
                {cart.length > 0 ?
                    <span className='badge'> { totalCartQuantity } </span> :
                    null
                }
            </div>
            <button
                type='button'
                title='User'
                className='user'
                onClick={toggleIsLoginSectionOpen}>
                <FontAwesomeIcon 
                    className='FontAwesomeIcon'
                    icon={faUser}/>
            </button>
            <div className={isLoginSectionOpenClasses}>
                <Login />
            </div>
        </>
    );
};

export default User;