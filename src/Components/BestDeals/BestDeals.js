import React from 'react';
import { Link } from 'react-router-dom';

import classes from './BestDeals.module.css';
import BigCard from '../Cards/BigCard/BigCard';

const BestDeals = props => (
    <ul className={classes.BestDeals}>
        {props.bestDeals.map((data, key) => {
            const url = data.name.replace(/\s+/g, '-');
            console.log(data);
            return (
                <Link  
                    key={key}
                    to={`/product/${url}/${data.id}`}>
                    <BigCard 
                        img={data.img}
                        name={data.name}
                        price={data.price}
                        stock={data.stock}
                        brand={data.brand}
                        previousPrice={data.previousPrice}/>
                </Link>
            );
        })}
    </ul>
);

export default BestDeals;