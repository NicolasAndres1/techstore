import React from 'react';
import CustomButton from '../../Button/CustomButton';

import classes from "./BigCard.module.css";
import StockLabel from '../../StockLabel/StockLabel';

const BigCard = props => (
    <li className={classes.Card}>
        <a href='/'>
            <div className={classes.ImgWrapper}>
                <img src={props.img}/>
            </div>
            <div className={classes.Info}>
                <p> Brand: { props.brand } </p>
                <div>
                    <StockLabel 
                        stock={props.stock} />
                </div>
            </div>
            <p className={classes.ProductName}> { props.name } </p>
            <p className={classes.PreviousPrice}> $ { props.previousPrice } </p>
            <p className={classes.ProductPrice}> $ { props.price } </p>
            <CustomButton className={classes.CustomButton}> See details </CustomButton>
        </a>
    </li>
);

export default BigCard;