import React, { useState, useEffect } from 'react';

import classes from './Menu.module.css';

import MenuItem from './MenuItem/MenuItem';
import CategoriesServices from '../../../Services/CategoriesService';

const Menu = props => {
    const [categories, setCategories] = useState([]);

    useEffect(() => 
        CategoriesServices.getAllCategories()
            .then(res => setCategories(res))
            .catch(err => console.error(err))
    , []);


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