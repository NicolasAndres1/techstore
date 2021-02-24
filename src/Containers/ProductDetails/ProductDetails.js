import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

import ProductService from '../../Services/ProductsService';

import './ProductDetails.css';
import BestPriceImg from '../../Assets/img/best-price.png';
import StockLabel from '../../Components/StockLabel/StockLabel';
import Button from '../../Components/Button/CustomButton';
import CreditCards from '../../Components/CreditCards/CreditCards';
import QuantitySelector from '../../Components/QuantitySelector/QuantitySelector';
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductDetails = props => {
    const [product, setProduct] = useState({});
    const [productQuantity, setProductQuantity] = useState(1);
    const [cart, setCart] = useContext(CartContext);

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
                price: data.price,
                stock: data.stock
            });
        });
    };

    const productQuantityChanged = props => {
        setProductQuantity(props.target.value)
    };

    const addToCart = () => {
        const toAdd = {
            productId: product.id,
            quantity: productQuantity
        }
        setCart(currentState => [...currentState, toAdd]);
    }

    return (
        <>
            {product ?
                <div className='content'>
                    <div className='breadcrumb'> breadcrumb </div>
                    <div className='item-section'> 
                        <div className='img-wrapper'>
                            <img src={product.img}/>
                        </div>
                        <div className='item-info'>
                            <div>
                                <h2> { product.name } </h2>
                            </div>
                            <h4> Brand: MSI</h4>   
                            <div className='item-code'> Code: { product.id } </div>
                            <div className='item-stock'>
                                <StockLabel stock={product.stock}/>
                            </div>
                        </div>
                        <div className='price-section'>
                            <div className='best-price-wrapper'>
                                <img src={BestPriceImg} />
                            </div>
                            <hr />
                            <div className='price-wrapper'>
                                <h2> ${ product.price } </h2>
                                <div className='or-separator'> 
                                    <div> OR <hr/> </div>                                
                                </div>
                                <div className='price-finance'>
                                    <h2> ${ (parseFloat(product.price) / 12).toFixed(2) } </h2> 
                                    <small> /mo </small>
                                </div>
                                <div className='finance-cards'>
                                    <p> Paying with </p> 
                                    <CreditCards />
                                </div>
                            </div>
                            <hr />
                            <div className='product-buy'> 
                                <div> Quantity: </div>
                                <QuantitySelector 
                                    value={productQuantity}
                                    onClick={productQuantityChanged}/>
                                <div className='add-cart-wrapper'>
                                    <Button 
                                        onClick={addToCart}> 
                                        <div className='add-cart-button'>
                                            <div>
                                                ADD TO CART
                                            </div>
                                            <FontAwesomeIcon 
                                                className='cart-icon'
                                                icon={faShoppingCart}/>
                                        </div>
                                    </Button>
                                </div>
                            </div>
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