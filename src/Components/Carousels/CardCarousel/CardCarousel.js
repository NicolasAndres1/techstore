import React from 'react';

import './CardCarousel.css';
import SimpleCard from '../../Cards/SimpleCard/SimpleCard';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const CardCarousel = props => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    return (
        <div className='carousel'>
            <Carousel 
                responsive={responsive}
                infinite={true}
                containerClass="carousel-container"
                autoPlay={true}
                autoPlaySpeed={3000}>
                {props.topSellers.map((data, key) => {
                    return <SimpleCard
                        key={key}
                        id={data.id}
                        img={data.img}
                        name={data.name}
                        price={data.price}/>
                })}
            </Carousel>
        </div>
    );
}
export default CardCarousel;