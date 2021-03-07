import React from 'react';
import Cleave from 'cleave.js/react';

import './CreditCardInput.css';

const CreditCardInput = props => {

    function onCreditCardTypeChanged(type) {
        if(type)
            props.creditCardTypeChanged(type) 
    }

    function onCreditCardChange(e) {
        if(e.target.rawValue)
            props.creditCardNumberChanged(e.target.rawValue);
    }

    return (
        <Cleave 
            className='cleave-input'
            placeholder='Card Number *'
            options={{
                creditCard: true,
                onCreditCardTypeChanged
            }}
            onChange={onCreditCardChange}/>
    );
};

export default CreditCardInput;