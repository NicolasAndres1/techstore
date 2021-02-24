import React, { useState, useEffect } from 'react';

import classes from './Menu.module.css';

import MenuItem from './MenuItem/MenuItem';
import { MENU_ROUTES } from '../../../Shared/MenuRoutes';

const Menu = props => {
    const [categories, setCategories] = useState([]);

    useEffect(() => setCategories(MENU_ROUTES), []);

    return (
        <ul className={classes.Menu}>
            {categories ?
                categories.map((item, key) => {
                    return <MenuItem 
                        key={key}
                        className={classes.MenuItem}
                        title={item.title}
                        link={item.link}
                        subCategories={item.subCategories}/>
                }) 
                : null
            }
        </ul>
    );
};

export default Menu;