import React from 'react';
import { Link } from 'react-router-dom';

import classes from './SimpleCard.module.css';
import CustomButton from '../../Button/CustomButton';

const SimpleCard = props => {
    let url = props.name.replace(/\s+/g, '-');

    return (
        <Link 
            className={classes.Card} 
            to={`/product/${url}`}>
                <img src={props.img}/>
                <p className={classes.ProductName}> { props.name } </p>
                <h5 className={classes.ProductPrice}> U$D { props.price } </h5>
                <CustomButton className={classes.CustomButton}> 
                    See details  
                </CustomButton>
        </Link>
    );
};

export default SimpleCard;