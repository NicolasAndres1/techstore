import React from 'react';
import classnames from 'classnames';

import './CreditCard.css';
import VisaLogo from '../../Assets/img/visa-logo.png';
import MasterCardLogo from '../../Assets/img/mastercard-logo.png';
import AmericanExpressLogo from '../../Assets/img/americanexpress-logo.png';

const creditCards = props => {
    const visaIsActive = classnames('card-logo', {'set-color-card': props.cardType === 'visa'});
    const masterIsActive = classnames('card-logo', {'set-color-card': props.cardType === 'mastercard'});
    const amexIsActive = classnames('card-logo', {'set-color-card': props.cardType === 'amex'});

    return (
        <>
            <img className={visaIsActive} id='visa' src={VisaLogo}/>
            <img className={masterIsActive} id='mastercard' src={MasterCardLogo}/>
            <img className={amexIsActive} id='amex' src={AmericanExpressLogo}/>
        </>
    );
};

export default creditCards;