import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './CartSummary.css';
import Button from '../Button/CustomButton';

const CartSummary = props => {
    const warrantyAndServices = 64.95;
    const [location, setLocation] = useState(useLocation().pathname.split('/')[2])

    return (
        <div className='cart-summary'>
            <h3> Summary </h3>
            <hr />
            <p> Subtotal: <strong> ${ props.totalCartPrice.toFixed(2) } </strong>  </p>
            <hr />
            <p> Warranty & Services: <strong> ${ warrantyAndServices } </strong>  </p>
            <hr />
            <p> Est. Total: <strong> ${ (props.totalCartPrice + warrantyAndServices).toFixed(2) } </strong> </p>
            <hr />
            <div className='cart-summary-button'>
                {location === 'cart'
                    ?   <Link to={`/shopping/checkout`}>
                            <Button> SECURE CHECKOUT </Button>
                        </Link>
                    :   <Button type='submit'> CHECKOUT </Button>
                }
            </div>
        </div>
    );
};

export default CartSummary;