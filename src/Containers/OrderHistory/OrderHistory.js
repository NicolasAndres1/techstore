import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import OrderService from '../../Services/OrderService';

import './OrderHistory.css';
import Backdrop from '../../Components/Backdrop/Backdrop';
import Spinner from '../../Components/Spinner/Spinner';
import Order from '../../Components/Order/Order';

const OrderHistory = () => {
    const [user, setUser] = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(user)
            OrderService.getOrdersByUid(user.uid)
                .then(res => setOrders(res))
                .catch(err => console.log(err))
                .finally(() => setIsLoading(false));
    }, [])

    return (
        <div className='checkout-orders'>
            <div className='checkout-spinner'>
                <Backdrop show={isLoading}>
                    <Spinner />
                </Backdrop>
            </div>
                {orders
                    ? (orders.map((order, orderKey) => 
                        order.cartItems.map((product, productKey) => 
                            <Order 
                                key={productKey} 
                                product={product}
                                orderId={order.id}
                                order={order}/>))
                    )
                    : null
                }
        </div>
    );
};

export default OrderHistory;