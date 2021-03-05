import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { AuthContext } from '../../contexts/AuthContext';

import ProductService from '../../Services/ProductsService';
import UserService from '../../Services/UserService';

import './ProductDetails.css';
import BestPriceImg from '../../Assets/img/best-price.png';
import StockLabel from '../../Components/StockLabel/StockLabel';
import Button from '../../Components/Button/CustomButton';
import CreditCards from '../../Components/CreditCards/CreditCards';
import QuantitySelector from '../../Components/QuantitySelector/QuantitySelector';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../../Components/Spinner/Spinner';

const ProductDetails = props => {
    const [product, setProduct] = useState();
    const [productQuantity, setProductQuantity] = useState(1);
    const [cart, setCart] = useContext(CartContext);
    const [user, setUser] = useContext(AuthContext);

    useEffect(() => {
        ProductService.getById(props.match.params.id)
            .then(res => setProduct(res))
            .catch(err => console.error(err));
    }, []);

    const productQuantityChanged = props => {
        setProductQuantity(parseInt(props))
    };

    const addToCart = () => {
        const toAdd = {
            id: product.id.toString(),
            quantity: productQuantity,
            name: product.name,
            price: product.price,
            img: product.img
        }

        setCart(currentState => {
            const itemIdx = cart.findIndex(e => e.id === toAdd.id);
            let cartToUpdate = [...currentState];

            if(itemIdx >= 0) {
                cartToUpdate[itemIdx].quantity = cartToUpdate[itemIdx].quantity + toAdd.quantity;
            }
            else {
                cartToUpdate = [...currentState, toAdd]
            }
            
            if(user) 
                UserService.updateItemsOnCart(user.uid, cartToUpdate);
            else localStorage.setItem('cart-items', JSON.stringify(cartToUpdate));

            return cartToUpdate;
        });
    }

    return (
        <>
            {product ?
                <div className='content'>
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
                            {product.stock
                                ? (
                                    <>
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
                                    </>
                                )
                                : <h4 className='stay-tuned-label'> STAY TUNED, WE WILL HAVE STOCK SOON! </h4>
                            }
                            
                        </div>
                    </div>
                    <hr />
                    {/* <div>
                        menus
                    </div> */}
                </div> 
                : <div className='spinner'>
                    <Spinner />
                  </div> 
            }
        </>
    );
};

export default withRouter(ProductDetails);