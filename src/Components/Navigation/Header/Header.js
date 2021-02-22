import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.css';
import Logo from '../../Logo/Logo';

import Menu from '../Menu/Menu';
import Search from "./Search/Search";
import User from './User/User';
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle';

import ProductCategoriesService from '../../../Services/ProductCategoriesService';

const Header = props => {
    const [categories, setCategories] = useState([]);

    /* Fetch categories to show on menu */
    useEffect(() => {
        ProductCategoriesService.getAll()
            .on('value', categoriesChange)
        
        return () => ProductCategoriesService.getAll()
            .off('value', categoriesChange);
    }, []);

    const categoriesChange = (items) => {
        let categoriesArray = [];

        items.forEach((item) => {
            let data = item.val();
            console.log(item.key)
            categoriesArray = Object.keys(data).map((key) => [key, data[key]]);
            console.log(categoriesArray)
        })

        setCategories(categoriesArray);
    }

    return (
        <header className={classes.Header}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <Link to={'/'} className={classes.LogoWrapper}>
                <Logo />
            </Link>
            <nav className={classes.Menu}>
                <Menu />
            </nav>
            <div className={classes.Controls}>
                <Search />
                <User />
            </div>
        </header>
    )
};

export default Header;