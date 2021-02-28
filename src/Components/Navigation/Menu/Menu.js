import React, { useState, useEffect } from 'react';

import classes from './Menu.module.css';

import MenuItem from './MenuItem/MenuItem';
import CategoriesServices from '../../../Services/CategoriesService';

const Menu = props => {
    const [categories, setCategories] = useState([]);

    useEffect(() => 
        CategoriesServices.getAllCategories()
            .on('value', categoriesChange)
        , []);

    const categoriesChange = (items) => {
        const categoriesArray = [];
        items.forEach((item) => {
            let data = item.val();

            categoriesArray.push({
                title: data.title,
                link: data.link,
                subCategories: data.subCategories
            });
        });
        
        setCategories(categoriesArray);
    };

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