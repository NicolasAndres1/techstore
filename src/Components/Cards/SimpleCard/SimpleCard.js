import React from 'react';
import { Link } from 'react-router-dom';

import classes from './SimpleCard.module.css';
import CustomButton from '../../Button/CustomButton';

const SimpleCard = props => {
    const url = props.name.replace(/\s+/g, '-');

    return (
        <div className={classes.Card}>
            <Link to={`/product/${url}/${props.id}`}>
                    <img src={props.img}/>
                    <p className={classes.ProductName}> { props.name } </p>
                    <h5 className={classes.ProductPrice}> U$D { props.price } </h5>
                    <CustomButton className={classes.CustomButton}> 
                        See details  
                    </CustomButton>
            </Link>
        </div>
    );
};

export default SimpleCard;