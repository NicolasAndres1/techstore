import React, { useState, useContext, useEffect } from 'react';

import './CartPopUp.css';
import { CartContext } from '../../../contexts/CartContext';
import ProductService from '../../../Services/ProductsService';
import Button from '../../Button/CustomButton';

const CartPopUp = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cartItemsArray = [];

        cart.forEach(item => {
            ProductService.getById(item.productId)
                .then(res => {
                    cartItemsArray.push({
                    img: res.img,
                    name: res.name,
                    price: res.price,
                    quantity: item.quantity
                })})
                .catch(err => console.error(err))
        })

        setCartItems(cartItemsArray);
    }, [cart])

    return (
        <div className='cart-container'>
            <h4 className='cart-title'> My Cart </h4>
            <hr />
            {cartItems.length > 0
                ? (
                    <>
                        <div className='cart-items'>
                            {cartItems.map((item, key) => 
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
                            <Button> Go to Cart </Button>
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