import React from 'react';

import classes from './Menu.module.css';

import MenuItem from './MenuItem/MenuItem';

const Menu = props => (
    <ul className={classes.Menu}>
        <MenuItem
            className={classes.MenuItem}
            title='COMPUTER SYSTEMS'
            link='/supplies'/>
        <MenuItem
            className={classes.MenuItem} 
            title='COMPONENTS'
            link='/computer'/>
        <MenuItem
            className={classes.MenuItem} 
            title='ELECTRONICS'
            link='/electronics'/>
        <MenuItem
            className={classes.MenuItem} 
            title='GAMING'
            link='/gaming'/>
        <MenuItem
            className={classes.MenuItem} 
            title='NETWORKING'
            link='/categories'/>
        <MenuItem
            className={classes.MenuItem} 
            title='SOFTWARE & SERVICES'
            link='/categories'/>
    </ul>
);

export default Menu;