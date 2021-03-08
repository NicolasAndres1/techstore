import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { CartContext } from '../../../contexts/CartContext';
import UserService from '../../../Services/UserService';
import { firebaseAuth } from '../../../Config/firebaseConfig';

import './SidedrawerMenu.css';

import CategoriesServices from '../../../Services/CategoriesService';
import { faUser, faHistory, faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidedrawerMenuItem from './SidedrawerMenuItem/SidedrawerMenuItem';

const SidedrawerMenu = (props) => {
    const [user, setUser] = useContext(AuthContext);
    const [cart, setCart] = useContext(CartContext)
    const [categories, setCategories] = useState([]);

    useEffect(() => 
        CategoriesServices.getAllCategories()
            .then(res => setCategories(res))
            .catch(err => console.error(err))
    , []);

    const authListener = () => {
        firebaseAuth.onAuthStateChanged(user => {
            if(user) {
                setTimeout(() => {
                    UserService.getUserDataByUid(user.uid)
                        .then(res => {
                            setUser(res)
                        })
                        .catch(err => console.error(err));
                }, 1500);
            }
            else {
                setUser('');
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    const handleLogout = () => {
        firebaseAuth.signOut();
        setCart([]);
    };

    return (
        <>
            {user
                ? (
                    <>
                        <div className='option'> 
                            Hi { user.firstName } ! 👋 
                        </div>
                        <Link 
                            className='option'
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
                        <Link 
                            className='option'
                            to={'/home'}
                            onClick={handleLogout}>
                            LOGOUT
                            <button
                                type='button'
                                title='User'
                                className='sidedrawer-logo'>
                                <FontAwesomeIcon 
                                    className='FontAwesomeIcon'
                                    icon={faUserSlash}/>
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