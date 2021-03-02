import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.css';
import Logo from '../../Logo/Logo';

import Menu from '../Menu/Menu';
import Search from "./Search/Search";
import User from './User/User';
import DrawerToggle from '../SidedrawerMenu/DrawerToggle/DrawerToggle';

const Header = props => {
    return (
        <header className={classes.Header}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <Link to={'/home'} className={classes.LogoWrapper}>
                <Logo />
            </Link>
            <nav className={classes.Menu}>
                <Menu />
            </nav>
            <div className={classes.Controls}>
                <div className={classes.Search}>
                    <Search />
                </div>
                <User />
            </div>
        </header>
    )
};

export default Header;