import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

import './SidedrawerMenu.css';

import CategoriesServices from '../../../Services/CategoriesService';
import { faUser, faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidedrawerMenuItem from './SidedrawerMenuItem/SidedrawerMenuItem';

const SidedrawerMenu = (props) => {
    const [user, setUser] = useContext(AuthContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => 
        CategoriesServices.getAllCategories()
            .then(res => setCategories(res))
            .catch(err => console.error(err))
    , []);

    return (
        <>
            {user
                ? (
                    <>
                        <Link 
                            className='login'
                            to={'/order-history'}
                            onClick={props.closed}>
                            Order History  
                            <button
                                type='button'
                                title='User'
                                className='sidedrawer-logo'>
                                <FontAwesomeIcon 
                                    className='FontAwesomeIcon'
                                    icon={faHistory}/>
                            </button>
                        </Link>
                    </>
                )
                : (
                    <Link 
                        className='login'
                        to={'/signin'}
                        onClick={props.closed}>
                        Login      
                        <button
                            type='button'
                            title='User'
                            className='user-logo'>
                            <FontAwesomeIcon 
                                className='FontAwesomeIcon'
                                icon={faUser}/>
                        </button>
                    </Link>
                )
            }
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