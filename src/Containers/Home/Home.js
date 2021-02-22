import React, { useState, useEffect } from "react";

import BestDealsService from "../../Services/BestDealsService";
import TopSellersService from "../../Services/TopSellersService";

import classes from './Home.module.css';
import CardCarousel from '../../Components/Carousels/CardCarousel/CardCarousel';
import BestDeals from "../../Components/BestDeals/BestDeals";
import BigCarousel from "../../Components/Carousels/BigCarousel/BigCarousel";

const Home = props => {
    const [topSellers, setTopSellers] = useState([]);
    const [bestDeals, setBestDeals] = useState([]);

    /* FETCH TOP SELLERS ITEMS */
    useEffect(() => {
        TopSellersService.getAll()
            .on("value", onTopSellersChange);
        
        // return () => TopSellersService.getAll()
        //     .off("value", onTopSellersChange)
    }, []);

    /* FETCH BEST DEALS ITEMS */
    useEffect(() =>{ 
        BestDealsService.getAll()
            .on("value", onBestDealsChange);

        // return () => BestDealsService.getAll()
        //     .off("value", onBestDealsChange);
    }, []);

    const onBestDealsChange = (items) => {
        const bestDealsArray = [];
        items.forEach((item) => {
            let key = item.key;
            let data = item.val();

            bestDealsArray.push({
                id: key,
                name: data.name,
                img: data.img,
                price: data.price,
                brand: data.brand,
                stock: data.stock,
                previousPrice: data.previousPrice
            });
        });

        setBestDeals(bestDealsArray);
    };

    const onTopSellersChange = (items) => {
        const topSellersArray = [];
        items.forEach((item) => {
            let data = item.val();

            topSellersArray.push({
                key: item.key,
                productName: data.ProductName,
                productImg: data.ProductImg,
                productPrice: data.ProductPrice
            });
        });
        
        setTopSellers(topSellersArray);
    };

    // const jejoz = () => TopSellersService.getById(1)
    //                     .on('value', ahre,
    //                     (error) => console.log('fallo'))
    
    
    
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