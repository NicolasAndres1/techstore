import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MenuItem.module.css';

const MenuItem = props => {
    return (
        <li className={classes.MenuItem}>
            <div className={classes.Dropdown}>
                <Link to={props.link}> { props.title } </Link>
                <div className={classes.DropdownContent}> 
                    {props.subCategories ?
                        props.subCategories.map((item, key) => {
                            return (
                                <div key={key}>
                                    <Link 
                                        to={`category/${item.link}`}
                                        className={classes.SubCategory}>
                                        { item.title }
                                    </Link>
                                    <div className={classes.VerticalLine}></div>
                                </div>
                            )
                        }) :
                        null
                    }
                </div>
            </div>
        </li>
    );
};

export default MenuItem;