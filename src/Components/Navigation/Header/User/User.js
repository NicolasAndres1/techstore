import React, { useContext, useState } from 'react'
import classnames from 'classnames';

import './User.css';
import { CartContext } from '../../../../contexts/CartContext';
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Login from '../../../Auth/LoginToggle/LoginToggle';

const User = props => {
    const [cart, setCart] = useContext(CartContext);
    const [isLoginSectionOpen, setIsLoginSectionOpen] = useState(false);

    const totalCartQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

    const toggleIsLoginSectionOpen = () => setIsLoginSectionOpen(!isLoginSectionOpen);

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
            <Login 
                open={isLoginSectionOpen}
                closed={toggleIsLoginSectionOpen}/>
        </>
    );
};

export default User;