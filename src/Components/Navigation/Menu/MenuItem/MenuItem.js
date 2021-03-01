import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import classes from './MenuItem.module.css';

const MenuItem = props => {
    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
        const subCategoriesArray = [];
        for(let i in props.subCategories) {
            subCategoriesArray.push(props.subCategories[i])
        }
        setSubCategories(subCategoriesArray);
    }, [])

    return (
        <li className={classes.MenuItem}>
            <div className={classes.Dropdown}>
                <Link 
                    to={`/${props.link}`}> 
                    { props.title } 
                </Link>
                <div className={classes.DropdownContent}> 
                    {subCategories ?
                        subCategories.map((item, key) => {
                            return (
                                <Link 
                                    key={key}
                                    to={`/category/${item.link}`}
                                    className={classes.SubCategory}>
                                        { item.title }
                                </Link>
                            )
                        }) :
                        null
                    }
                </div>
            </div>
        </li>
    );
};

export default withRouter(MenuItem);