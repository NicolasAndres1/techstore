import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { AuthContext } from '../../contexts/AuthContext';
import UserService from '../../Services/UserService';

import './Cart.css';

import CartItem from '../../Components/CartItem/CartItem';
import CartSummary from '../../Components/CartSummary/CartSummary';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [user, setUser] = useContext(AuthContext);

    const totalCartPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

    const quantityChangesHandler = (e, itemId) => {
        setCart(currentState => {
            let cartToUpdate = [...currentState];
            const idx = cart.findIndex(item => item.id === itemId);
            cartToUpdate[idx].quantity = parseInt(e);

            if(user) 
                UserService.updateItemsOnCart(user.uid, cartToUpdate);
            else 
                localStorage.setItem('cart-items', JSON.stringify(cartToUpdate));

            return cartToUpdate;
        });
    };

    const removeItemHandler = (e) => {
        setCart(currentState => {
            let cartToUpdate = [...currentState];
            const idx = cart.findIndex(item => item.id === e.target.value);
            cartToUpdate.splice(idx, 1);

            if(user) 
                UserService.updateItemsOnCart(user.uid, cartToUpdate);
            else 
                localStorage.setItem('cart-items', JSON.stringify(cartToUpdate));

            return cartToUpdate;
        });
    }

    return (
        <div className='cart-wrapper'>
            <h2> MY CART </h2>
            {cart.length > 0
                ? (
                    <div className='cart-items-and-summary-wrapper'>
                        <div className='cart-items-wrapper'>
                            {cart.map((item, key) => 
                                <CartItem 
                                    key={key} 
                                    item={item}
                                    quantityChanged={e => quantityChangesHandler(e, item.id)}
                                    itemRemoved={removeItemHandler}/>)}
                        </div>
                        <div className='cart-summary-wrapper'> 
                            <CartSummary 
                                totalCartPrice={totalCartPrice}/>
                        </div>
                    </div>
                )
                : (
                    <p> no hay </p>
                )
            }
        </div>
    );
};

export default Cart;