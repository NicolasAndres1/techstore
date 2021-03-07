import React, { useState, useEffect } from 'react';

import './SidedrawerMenu.css';

import CategoriesServices from '../../../Services/CategoriesService';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidedrawerMenuItem from './SidedrawerMenuItem/SidedrawerMenuItem';

const SidedrawerMenu = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => 
        CategoriesServices.getAllCategories()
            .then(res => setCategories(res))
            .catch(err => console.error(err))
    , []);

    return (
        <>
            <div className='login'>
                Login      
                <button
                    type='button'
                    title='User'
                    className='user-logo'>
                    <FontAwesomeIcon 
                        className='FontAwesomeIcon'
                        icon={faUser}/>
                </button>
            </div>
            <hr />
            <nav className='menu-wrapper'>
                <ul className='menu'>
                    {categories ?
                        categories.map((item, key) => {
                            return <SidedrawerMenuItem 
                                key={key}
                                title={item.title}
                                link={item.link}
                                close={props.closed}
                                subCategories={item.subCategories}/>
                        }) 
                        : null
                    }
                </ul>
            </nav>
        </>
    );
};

export default SidedrawerMenu;