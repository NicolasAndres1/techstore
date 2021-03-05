import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';
import { AuthContext } from '../../contexts/AuthContext';

import CartSummary from '../../Components/CartSummary/CartSummary'

import './CheckOut.css';
import Input from '../../Components/Input/Input';

const CheckOut = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const [user, setUser] = useContext(AuthContext);

    const totalCartPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

    const checkOutHandler = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <form 
            onSubmit={checkOutHandler}
            className='checkout-form'>
            <div className='form-block'>
                <small> SHIPPING INFO </small>
                <div className='checkout-form-fields'>
                    <div className='form-fields'>
                        <Input placeholder='Country'/>
                        <Input placeholder='First Name'/>
                        <Input placeholder='Last Name'/>
                        <Input placeholder='Address'/>
                        <Input placeholder='Address 2 (Opt) Apt, floor, etc.'/>
                        <Input placeholder='City'/>
                        <Input placeholder='State/Province'/>
                        <Input placeholder='Zip Code'/>
                        <Input placeholder='Phone'/>
                    </div>
                </div>
            </div>
            <div className='form-block'>
                <small className='payment-info'> PAYMENT INFO </small>
                <div className='checkout-form-fields'>
                    <div className='form-fields'>
                        <Input placeholder='Country/Region'/>
                        <Input placeholder='Country/Region'/>
                    </div>
                </div>
            </div>
            <div className='cart-summary-wrapper'>
                <CartSummary totalCartPrice={totalCartPrice}/>
            </div>
        </form>
    )
}

export default CheckOut;

