import React, { useContext, useState } from 'react'
import classnames from 'classnames';

import './User.css';
import { CartContext } from '../../../../contexts/CartContext';
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PopUp from "../../../PopUp/PopUp";
import LoginPopUp from '../../../PopUp/LoginPopUp/LoginPopUp';
import CartPopUp from '../../../PopUp/CartPopUp/CartPopUp';

const User = props => {
    const [cart, setCart] = useContext(CartContext);
    const [isLoginSectionOpen, setIsLoginSectionOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const totalCartQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

    const toggleIsLoginSectionOpen = () => setIsLoginSectionOpen(!isLoginSectionOpen);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <>
            <div className='cart-button'>
                <button
                    type='button'
                    title='Cart'
                    onClick={toggleIsCartOpen}>
                    <FontAwesomeIcon 
                        className='FontAwesomeIcon'
                        icon={faShoppingCart}/>
                </button>
                {cart.length > 0 ?
                    <span className='badge'> { totalCartQuantity } </span> :
                    null
                }
            </div>
            <PopUp
                open={isCartOpen}
                closed={toggleIsCartOpen}>
                <CartPopUp closed={toggleIsCartOpen}/>
            </PopUp>
            <button
                type='button'
                title='User'
                className='user'
                onClick={toggleIsLoginSectionOpen}>
                <FontAwesomeIcon 
                    className='FontAwesomeIcon'
                    icon={faUser}/>
            </button>
            <PopUp
                open={isLoginSectionOpen}
                closed={toggleIsLoginSectionOpen}>
                <LoginPopUp closed={toggleIsLoginSectionOpen}/>
            </PopUp>
        </>
    );
};

export default User;