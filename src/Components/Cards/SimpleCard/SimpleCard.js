import React from 'react';

import classes from './SimpleCard.module.css';
import CustomButton from '../../Button/CustomButton';

const SimpleCard = props => (
    <li className={classes.Card}>
        <a>
            <img src={props.productImg}/>
            <p className={classes.ProductName}> { props.productName } </p>
            <h5 className={classes.ProductPrice}> U$D { props.productPrice } </h5>
            <CustomButton className={classes.CustomButton}> 
                See details  
            </CustomButton>
        </a>
    </li>
);

export default SimpleCard;