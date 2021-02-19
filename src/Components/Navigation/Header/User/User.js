import React from 'react'

import classes from './User.module.css';
import { faHeart, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const User = props => (
    <div className={classes.UserControls}>
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
            <span className={classes.Badge}>1</span>
        </div>
        <button
            type='button'
            title='User'>
            <FontAwesomeIcon 
                className='FontAwesomeIcon'
                icon={faUser}/>
        </button>
    </div>
);

export default User;