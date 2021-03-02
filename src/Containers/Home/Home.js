import React, { useState, useEffect } from "react";

import BestDealsService from "../../Services/BestDealsService";
import TopSellersService from '../../Services/TopSellersService';

import classes from './Home.module.css';
import CardCarousel from '../../Components/Carousels/CardCarousel/CardCarousel';
import BestDeals from "../../Components/BestDeals/BestDeals";
import BigCarousel from "../../Components/Carousels/BigCarousel/BigCarousel";

const Home = props => {
    const [topSellers, setTopSellers] = useState([]);
    const [bestDeals, setBestDeals] = useState([]);

    
    useEffect(() => {
        TopSellersService.getAll()
            .then(res => setTopSellers(res))
            .catch(err => console.error(err));

        BestDealsService.getAll()
            .then(res => setBestDeals(res))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <>
            <div className={classes.BigCarousel}>
                <BigCarousel />
            </div>
            <section>
                <h3> Top Sellers </h3>
                {topSellers ? 
                    <CardCarousel 
                        className={classes.CardCarousel}
                        topSellers={topSellers}/> :
                    null
                }
            </section>
            <div className={classes.BestDeals}>
                <h2> BEST DEALS </h2>
                {bestDeals ?
                    <BestDeals 
                        bestDeals={bestDeals}/> :
                    null
                }
            </div>
        </>
    );
}

export default Home;