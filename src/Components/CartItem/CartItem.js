import React from 'react';

import './CartItem.css';
import Button from '../Button/CustomButton';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

const CartItem = props => {

    return (
        <div className='cart-view-item'>
            <div className='cart-view-img-wrapper'>
                <img src={props.item.img}/>
            </div>
            <h3 className='cart-view-name'> { props.item.name } </h3>
            <div className='cart-view-item-label'> Unit price:  ${ props.item.price } </div>
            <div className='cart-view-item-label'> Total item price: ${ (props.item.price * props.item.quantity).toFixed(2) } </div>
            <div className='cart-view-item-quantity'> 
                <div> Quantity: </div>
                <QuantitySelector
                    value={props.item.quantity}
                    onClick={props.quantityChanged}/>
            </div>
            <div className='cart-view-item-remove cart-view-item-label'> 
                <Button 
                    onClick={props.itemRemoved}
                    value={props.item.id}> Remove </Button>
            </div>
        </div>
    );
};

export default CartItem;