import React from 'react'
import { Link } from 'react-router-dom';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Order.css';

const Order = ({product, orderId, order}) => {
    console.log(order)

    return (
        <div className='order-wrapper'>
            <div className='order-img-wrapper'>
                <Link to={`/product/${product.name}/${product.id}`}>  
                    <img src={product.img} />
                </Link>
            </div>
            <div className='order-product-info'>
                <Link to={`/product/${product.name}/${product.id}`}> { product.name } </Link>
                <small> ${ product.price } x { product.quantity } { product.quantity > 1 ? 'units' : 'unit'}  </small>
                <div className='order-address'> 
                    <FontAwesomeIcon 
                        className='order-map-marker'
                        icon={faMapMarkerAlt}/>
                    <div className='order-address-label'>
                        <div>
                            { order.address }, 
                        </div>
                        <div>
                            { order.city }, 
                        </div>
                        <div>
                            { order.stateProvince }, 
                        </div>
                        <div>
                            { order.country }
                        </div>
                    </div>
                </div>
                <small> Order: #{ orderId }  </small>
            </div>
        </div>
    )
}

export default Order
