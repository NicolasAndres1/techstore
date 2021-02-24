import React, { useState } from 'react';

import { CartProvider } from '../../context/CartContext';
import classes from './Layout.module.css';
import Header from '../../Components/Navigation/Header/Header';
import Sidedrawer from '../../Components/Navigation/Sidedrawer/Sidedrawer';

const Layout = props => {
    const [sidedrawerIsVisible, setSidedrawerIsVisible] = useState(false);

    const sideDrawerCloseHandler = () => setSidedrawerIsVisible(false);
    const sideDrawerToggleHandler = () => setSidedrawerIsVisible(!sidedrawerIsVisible);
    
    return (
        <CartProvider>  
            <Header 
                drawerToggleClicked={sideDrawerToggleHandler}/>
            <Sidedrawer 
                open={sidedrawerIsVisible}
                closed={sideDrawerCloseHandler}/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </CartProvider>
    );
};

export default Layout;