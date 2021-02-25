import React, { useContext } from 'react'

import { CartContext } from '../../../../context/CartContext';
import classes from './User.module.css';
import { faHeart, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const User = props => {
    const [cart, setCart] = useContext(CartContext);
    const totalCartQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

    return (
        <>
            <button
                className={classes.Heart}
                type='button'
                title='Favourites'>
                <FontAwesomeIcon 
                    className='FontAwesomeIcon'
                    icon={faHeart}/>
            </button>
            <div className={classes.CartButton}>
                <button
                    type='button'
                    title='Cart'>
                    <FontAwesomeIcon 
                        className='FontAwesomeIcon'
                        icon={faShoppingCart}/>
                </button>
                {cart.length > 0 ?
                    <span className={classes.Badge}> { totalCartQuantity } </span> :
                    null
                }
            </div>
            <button
                type='button'
                title='User'
                className={classes.User}>
                <FontAwesomeIcon 
                    className='FontAwesomeIcon'
                    icon={faUser}/>
            </button>
        </>
    );
};

export default User;