import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { AuthContext } from '../../contexts/AuthContext';
import OrderService from '../../Services/OrderService';

import './CheckOut.css';
import Input from '../../Components/Input/Input';
import CreditCardInput from '../../Components/CreditCardInput/CreditCardInput';
import CreditCards from '../../Components/CreditCards/CreditCards';
import CartSummary from '../../Components/CartSummary/CartSummary'
import Backdrop from '../../Components/Backdrop/Backdrop';
import Spinner from '../../Components/Spinner/Spinner';

const CheckOut = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const [user, setUser] = useContext(AuthContext);
    const [country, setCountry] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [addressOpt, setAddressOpt] = useState('');
    const [city, setCity] = useState('');
    const [stateProvince, setStateProvince] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [cardMonthExpirity, setCardMonthExpirity] = useState('');
    const [cardYearExpirity, setCardYearExpirity] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardType, setCardType] = useState('unknown');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const totalCartPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

    const checkOutHandler = (e) => {
        setIsLoading(true);
        e.preventDefault();
        const order = {
            uid: user.uid,
            country: country,
            firstName: firstName,
            lastName: lastName,
            address: address,
            addressOpt: addressOpt,
            city: city,
            stateProvince: stateProvince,
            zipCode: zipCode,
            phone: phone,
            cardNumber: cardNumber,
            cardHolderName: cardHolderName,
            cardMonthExpirity: cardMonthExpirity,
            cardYearExpirity: cardYearExpirity,
            cvv: cvv,
            cartItems: cart,
            totalCartPrice: (totalCartPrice + 64.95).toFixed(2)
        }

        OrderService.saveOrder(order)
            .then(() => {
                setCart([]);
                history.push('/home');
            })
            .catch(err => console.log('error'))
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <>
        <div className='checkout-spinner'>
            <Backdrop show={isLoading}>
                <Spinner />
            </Backdrop>
        </div>
            <form 
                onSubmit={checkOutHandler}
                className='checkout-form'>
                <div className='check-out-form-wrapper'>
                    <div className='form-block'>
                        <small> SHIPPING INFO </small>
                        <div className='checkout-form-fields'>
                            <div className='form-fields'>
                                <Input 
                                    type='text'
                                    required={true}
                                    placeholder='Country *'
                                    onChange={e => setCountry(e.target.value)}/>
                                <Input 
                                    type='text'
                                    required={true}
                                    placeholder='First Name *'
                                    onChange={e => setFirstName(e.target.value)}/>
                                <Input 
                                    type='text'
                                    required={true}
                                    placeholder='Last Name *'
                                    onChange={e => setLastName(e.target.value)}/>
                                <Input 
                                    type='text'
                                    required={true}
                                    placeholder='Address *'
                                    onChange={e => setAddress(e.target.value)}/>
                                <Input 
                                    type='text'
                                    placeholder='Address 2 (Opt) Apt, floor, etc.'
                                    onChange={e => setAddressOpt(e.target.value)}/>
                                <Input 
                                    type='text'
                                    required={true}
                                    placeholder='City *'
                                    onChange={e => setCity(e.target.value)}/>
                                <Input 
                                    type='text'
                                    required={true}
                                    placeholder='State/Province *'
                                    onChange={e => setStateProvince(e.target.value)}/>
                                <Input 
                                    type='number'
                                    required={true}
                                    placeholder='Zip Code *'
                                    onChange={e => setZipCode(e.target.value)}/>
                                <Input 
                                    type='number'
                                    required={true}
                                    placeholder='Phone *'
                                    onChange={e => setPhone(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className='form-block'>
                        <small className='payment-info'> PAYMENT INFO </small>
                        <div className='checkout-form-fields'>
                            <div className='form-fields'>
                                <CreditCardInput 
                                    creditCardTypeChanged={e => setCardType(e)}
                                    creditCardNumberChanged={e => setCardNumber(e)}/>
                                <div className='check-out-finance-cards'>
                                    <CreditCards cardType={cardType}/>
                                </div>
                                <Input 
                                    type='text'
                                    required={true}
                                    placeholder='Cardholder Name *'
                                    onChange={e => setCardHolderName(e.target.value)}/>
                                <div className='card-expirity-and-cvv'>
                                    <Input 
                                        type='text'
                                        required={true}
                                        placeholder='MM *'
                                        onChange={e => setCardMonthExpirity(e.target.value)}/>
                                    <div className='card-expirity-backslash'> / </div>
                                    <Input 
                                        type='text'
                                        required={true}
                                        placeholder='YY *'
                                        onChange={e => setCardYearExpirity(e.target.value)}/>
                                    <Input 
                                        type='number '
                                        required={true}
                                        placeholder='CVV *'
                                        onChange={e => setCvv(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='checkout-summary-wrapper'>
                    <CartSummary totalCartPrice={totalCartPrice}/>
                </div>
            </form>
        </>
    )
}

export default CheckOut;

