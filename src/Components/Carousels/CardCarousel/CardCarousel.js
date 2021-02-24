import React from 'react';

import classes from './CardCarousel.module.css';
import SimpleCard from '../../Cards/SimpleCard/SimpleCard';

const CardCarousel = props => (
    <ul className={classes.CardCarousel}>
        {props.topSellers.map((data, key) => {
            return <SimpleCard
                key={key}
                id={data.id}
                img={data.img}
                name={data.name}
                price={data.price}/>
        })}
    </ul>
);

export default CardCarousel;