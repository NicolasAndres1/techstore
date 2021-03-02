import React from 'react';

import './ProductFilter.css';
import Button from '../Button/CustomButton';
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductFilter = props => {

    return (
        <div className='filter-button'>
            <Button onClick={props.clicked}> 
                Filters 
                <FontAwesomeIcon 
                        className='FontAwesomeIcon'
                        icon={faFilter}/>
            </Button>
        </div>
    );
};

export default ProductFilter;