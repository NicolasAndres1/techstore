import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { firebaseAuth } from '../../Config/firebaseConfig';
import UserService from '../../Services/UserService';

import classes from './Layout.module.css';
import Header from '../../Components/Navigation/Header/Header';
import Sidedrawer from '../../Components/Sidedrawer/Sidedrawer';
import SidedrawerMenu from '../../Components/Navigation/SidedrawerMenu/SidedrawerMenu';

const Layout = props => {
    const [sidedrawerIsVisible, setSidedrawerIsVisible] = useState(false);
    const [cart, setCart] = useContext(CartContext);

    const sideDrawerCloseHandler = () => setSidedrawerIsVisible(false);
    const sideDrawerToggleHandler = () => setSidedrawerIsVisible(!sidedrawerIsVisible);
    
    useEffect(() => {firebaseAuth.onAuthStateChanged(user => loadCart(user))}, [])

    const loadCart = (user) => {
        const localStorageCart = JSON.parse(localStorage.getItem('cart-items'));

        if (user)
            UserService.getUserDataByUid(user.uid)
                .then(res => loadCartWithUserLogged(res.cartItems, localStorageCart))
                .catch(err => console.error(err));
        else if(!user && localStorageCart) 
            setCart(localStorageCart)
    }

    const loadCartWithUserLogged = (userCart, localStorageCart) => {
        let cartToBeSetted = [];
        if(localStorageCart) {
            const combinedCarts = [...userCart, ...localStorageCart];

            combinedCarts.forEach(function(obj) {
                var id = obj.id;
                if(!this[id]) cartToBeSetted.push(this[id] = obj);
                else this[id].quantity += obj.quantity;
            }, Object.create(null));
        }
        else
            cartToBeSetted = userCart;

        setCart(cartToBeSetted);
    }

    return (
        <>
            <Header 
                drawerToggleClicked={sideDrawerToggleHandler}/>
            <Sidedrawer 
                open={sidedrawerIsVisible}
                closed={sideDrawerCloseHandler}>
                <SidedrawerMenu />
            </Sidedrawer>
            <main className={classes.Content}>
                {props.children}
            </main>
        </>
    );
};

export default Layout;