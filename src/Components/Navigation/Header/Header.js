import React from 'react';

import classes from './Header.module.css';
import Logo from '../../Logo/Logo';

import Menu from '../Menu/Menu';
import Search from "./Search/Search";
import User from './User/User';
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle';

const Header = props => {
    return (
        <header className={classes.Header}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <div className={classes.LogoWrapper}>
                <Logo />
            </div>
            <nav className={classes.Menu}>
                <Menu className={classes.Menu}/>
            </nav>
            <div className={classes.Controls}>
                <Search />
                <User />
            </div>
        </header>
    )
};

export default Header;