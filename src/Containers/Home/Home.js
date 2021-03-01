import React, { useState, useEffect } from "react";

import BestDealsService from "../../Services/BestDealsService";
import ProductService from '../../Services/ProductsService';

import classes from './Home.module.css';
import CardCarousel from '../../Components/Carousels/CardCarousel/CardCarousel';
import BestDeals from "../../Components/BestDeals/BestDeals";
import BigCarousel from "../../Components/Carousels/BigCarousel/BigCarousel";

const Home = props => {
    const [topSellers, setTopSellers] = useState([]);
    const [bestDeals, setBestDeals] = useState([]);

    
    useEffect(() => {
        ProductService.getTopSellers()
            .once("value", onTopSellersChange);

        ProductService.getBestDeals()
            .once("value", onBestDealsChange);
    }, []);

    const onTopSellersChange = (items) => {
        const topSellersArray = [];
        items.forEach((item) => {
            let key = item.key;
            let data = item.val();

            topSellersArray.push({
                key: key,
                id: data.id,
                img: data.img,
                name: data.name,
                price: data.price
            });
        });
        
        setTopSellers(topSellersArray);
    };

    const onBestDealsChange = (items) => {
        const bestDealsArray = [];
        items.forEach((item) => {
            let key = item.key;
            let data = item.val();

            bestDealsArray.push({
                id: key,
                name: data.name,
                img: data.img,
                price: data.currentPrice,
                brand: data.brand,
                stock: data.stock,
                previousPrice: data.previousPrice
            });
        });

        setBestDeals(bestDealsArray);
    };
    
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