import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './CartPopUp.css';
import { CartContext } from '../../../contexts/CartContext';
import ProductService from '../../../Services/ProductsService';
import Button from '../../Button/CustomButton';

const CartPopUp = (props) => {
    const [cart, setCart] = useContext(CartContext);

    return (
        <div className='cart-container'>
            <h4 className='cart-title'> My Cart </h4>
            <hr />
            {cart.length > 0
                ? (
                    <>
                        <div className='cart-items'>
                            {cart.map((item, key) => 
                                <div 
                                    key={key}
                                    className='cart-item'>
                                    <img src={item.img} />
                                    <div className='item-cart-info'> 
                                        <p> { item.name } </p>
                                        <p className='item-quantity'> Quantity: { item.quantity } </p>
                                        <p> Price: ${ item.price } </p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <hr />
                        <div className='action-buttons'>
                            <Button onClick={props.closed}> Continue Buying </Button>
                            <Link 
                                onClick={props.closed}
                                to={`/shopping/cart`}>
                                <Button> Go to Cart </Button>
                            </Link>
                            <Button> Empty Cart </Button>
                        </div>
                    </>
                )
                : (
                    <p> no items </p>
                )
            }
        </div>
    );
};

export default CartPopUp;