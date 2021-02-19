import React, { useState } from 'react';

import classes from './Layout.module.css';
import Header from '../../Components/Navigation/Header/Header';
import Sidedrawer from '../../Components/Navigation/Sidedrawer/Sidedrawer';

const Layout = props => {
    const [sidedrawerIsVisible, setSidedrawerIsVisible] = useState(false);

    const sideDrawerCloseHandler = () => setSidedrawerIsVisible(false);
    const sideDrawerToggleHandler = () => setSidedrawerIsVisible(!sidedrawerIsVisible);
    
    return (
        <>  
            <Header 
                drawerToggleClicked={sideDrawerToggleHandler}/>
            <Sidedrawer 
                open={sidedrawerIsVisible}
                closed={sideDrawerCloseHandler}/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </>
    );
};

export default Layout;