import React, { useState } from 'react';
import classnames from 'classnames';

import './QuantitySelector.css';

import Backdrop from '../Backdrop/Backdrop';

const QuantitySelector = ({value, onClick}) => {
    const [dropdownToggler, setDropdownToggler] = useState(false);
    const [moreThanFiveUnits, setMoreThanFiveUnits] = useState(false);

    const toggleDropdown = () => setDropdownToggler(!dropdownToggler);

    const sendQuantity = (props) => {
        onClick(props);
        toggleDropdown();
    };

    const dropdownClasses = classnames({
        'dropdown': true,
        'open-dropdown': dropdownToggler,
        'close-dropdown': !dropdownToggler
    });

    const buttonArrowClasses = classnames({
        'dropdown-arrow': true,
        'dropdown-arrow-up': dropdownToggler,
    });

    console.log(buttonArrowClasses);

    return (
        <div className='quantity-selector'>
            <div className='backdrop'>
                <Backdrop 
                    show={dropdownToggler}
                    clicked={toggleDropdown}/>
            </div>
            <button 
                className='dropdown-button'
                onClick={toggleDropdown}>
                { value } { value === 1 ? 'unit' : 'units' }
                <small className={buttonArrowClasses}> v </small> 
            </button>
            <ul className={dropdownClasses}>
                <li onClick={sendQuantity} value={1}>
                    1 unit 
                </li>
                <li onClick={sendQuantity} value={2}>
                    2 units 
                </li>
                <li onClick={sendQuantity} value={3}>
                    3 units
                </li>
                <li onClick={sendQuantity} value={4}>
                    4 units
                </li>
                <li onClick={sendQuantity} value={5}>
                    5 units
                </li>
                <li>
                    <button> More than 5 units </button>
                </li>
            </ul>
        </div>
    );
};

export default QuantitySelector;