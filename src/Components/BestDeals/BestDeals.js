import React from 'react';

import classes from './BestDeals.module.css';
import BigCard from '../Cards/BigCard/BigCard';

const BestDeals = props => (
    <ul className={classes.BestDeals}>
        {props.bestDeals.map((data, key) => 
            <BigCard 
                key={key}
                img={data.img}
                name={data.name}
                price={data.price}
                stock={data.stock}
                brand={data.brand}
                previousPrice={data.previousPrice}/>
        )}
    </ul>
);

export default BestDeals;