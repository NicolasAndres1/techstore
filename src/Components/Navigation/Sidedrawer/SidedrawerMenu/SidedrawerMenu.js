import React, { useState, useEffect } from 'react';

import './SidedrawerMenu.css';

import MenuItem from '../../Menu/MenuItem/MenuItem';
import CategoriesServices from '../../../../Services/CategoriesService';

const SidedrawerMenu = props => {
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
        <ul className='menu'>
            {categories ?
                categories.map((item, key) => {
                    return <MenuItem 
                        key={key}
                        className='MenuItem'
                        title={item.title}
                        link={item.link}
                        subCategories={item.subCategories}/>
                }) 
                : null
            }
        </ul>
    );
};

export default SidedrawerMenu;