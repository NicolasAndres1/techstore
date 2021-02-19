import React from 'react';

import classes from './CardCarousel.module.css';
import SimpleCard from '../../Cards/SimpleCard/SimpleCard';

const CardCarousel = props => (
    <ul className={classes.CardCarousel}>
        {props.topSellers.map((data, key) => {
            return <SimpleCard
                key={key}
                id={data['key']}
                productImg={data.productImg}
                productName={data.productName}
                productPrice={data.productPrice}/>
        })}
    </ul>
);

export default CardCarousel;