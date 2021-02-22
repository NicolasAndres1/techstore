import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import ProductService from '../../Services/ProductsService';

import './ProductDetails.css';
import BestPriceImg from '../../Assets/img/best-price.png';
import StockLabel from '../../Components/StockLabel/StockLabel';

const ProductDetails = props => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        ProductService.getById(props.match.params.id)
            .on('value', onProductChange);
    }, []);

    const onProductChange = (items) => {
        items.forEach((item) => {
            let data = item.val();

            setProduct({
                id: data.id,
                name: data.name,
                img: data.img,
                price: data.price
            });
        });
    };

    return (
        <>
            {product ?
                <div className='content'>
                    <div> breadcrumb </div>
                    <div className='item-section'> 
                        <div className='img-wrapper'>
                            <img src={product.img}/>
                        </div>
                        <div className='item-info'>
                            <h2> { product.name } </h2>
                            <h4> Brand: MSI</h4>   
                            <div className='item-code'> Code: { product.id } </div>
                            <div className='item-stock'>
                                <StockLabel stock='InStock'/>
                            </div>
                        </div>
                        <div className='price-section'>
                            <div className='best-price-wrapper'> 
                                <img src={BestPriceImg} />
                            </div>
                            <div className='price-wrapper'>
                                <h2> ${product.price} </h2>
                            </div>
                            <div> add to cart </div>
                        </div>
                    </div>
                    <div>
                        menus
                    </div>
                </div> :
                null}
        </>
    );
};

export default withRouter(ProductDetails);