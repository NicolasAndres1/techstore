import React from 'react';

import classes from "./Menu.module.css";
import MenuItem from './MenuItem/MenuItem';

const Menu = props => (
    <ul className={classes.Menu}>
        <MenuItem
            className={classes.MenuItem}
            title='SUPPLIES'
            link='/'/>
        <MenuItem
            className={classes.MenuItem} 
            title='COMPONENTS'
            link='/'/>
        <MenuItem
            className={classes.MenuItem} 
            title='ELECTRONICS'
            link='/'/>
        <MenuItem
            className={classes.MenuItem} 
            title='GAMING ZONE'
            link='/'/>
        <MenuItem
            className={classes.MenuItem} 
            title='CATEGORIES'
            link='/'/>
    </ul>
);

export default Menu;