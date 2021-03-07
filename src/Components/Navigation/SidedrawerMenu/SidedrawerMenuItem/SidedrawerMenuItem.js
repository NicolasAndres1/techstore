import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import './SidedrawerMenuItem.css';

const SidedrawerMenuItem = (props) => {
    const [subCategories, setSubCategories] = useState([]);
    const [showSubCategories, setShowSubCategories] = useState(false);

    useEffect(() => {
        const subCategoriesArray = [];
        for(let i in props.subCategories) {
            subCategoriesArray.push(props.subCategories[i])
        }
        setSubCategories(subCategoriesArray);
    }, [])

    return (
        <li className='sidedrawer-menu-item'>
            <div className='sidedrawer-dropdown'>
                {props.link === 'home'
                    ? <Link 
                        to={`/${props.link}`}
                        onClick={props.close}> 
                        { props.title } 
                      </Link>
                    : <div 
                        className='sidedrawer-menu-title' 
                        onClick={e => setShowSubCategories(!showSubCategories)}> 
                        { props.title } 
                        {showSubCategories
                            ? <p> - </p>
                            : <p> + </p>
                        }
                      </div>
                }
                {showSubCategories
                    ? <div className='sidedrawer-collapsible-content'> 
                        {subCategories ?
                            subCategories.map((item, key) => {
                                return (
                                    <Link 
                                        key={key}
                                        to={`/${props.link}/${item.link}`}
                                        onClick={props.close}>
                                            { item.title }
                                    </Link>
                                )
                            }) :
                            null
                        }
                    </div>
                    : null
                }
            </div>
        </li>
    )
}

export default SidedrawerMenuItem;
