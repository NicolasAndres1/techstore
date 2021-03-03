import React, { useState } from 'react';
import SimpleCard from '../Cards/SimpleCard/SimpleCard';

import './ProductsContainer.css';

const ProductsContainer = (props) => (
    <div className='products-container'>
        {props.items 
            ? (props.items.map(item => {
                return (
                    <SimpleCard 
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        price={item.price}/>
                )
            }))
            : null
        }
    </div>
);


export default ProductsContainer;