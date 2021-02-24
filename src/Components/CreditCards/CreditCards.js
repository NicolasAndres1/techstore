import React from 'react';

import VisaLogo from '../../Assets/img/visa-logo.png';
import MasterCardLogo from '../../Assets/img/mastercard-logo.png';
import AmericanExpressLogo from '../../Assets/img/americanexpress-logo.png';

const creditCards = props => (
    <>
        <img src={VisaLogo}/>
        <img src={MasterCardLogo}/>
        <img src={AmericanExpressLogo}/>
    </>
);

export default creditCards;