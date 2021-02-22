import React from 'react';
import { useHistory } from 'react-router-dom';

import classes from './SimpleCard.module.css';
import CustomButton from '../../Button/CustomButton';

const SimpleCard = props => {
    let history = useHistory();

    const productDetails = () => history.push(`/product/${props.productName}`)

    return (
        <li className={classes.Card} onClick={productDetails}>
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
};

export default SimpleCard;