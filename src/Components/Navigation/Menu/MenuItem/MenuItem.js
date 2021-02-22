import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MenuItem.module.css';

const MenuItem = props => (
        <li className={classes.MenuItem}>
            <div className={classes.Dropdown}>
                <Link to={props.link}> { props.title } </Link>
                <div className={classes.DropdownContent}> 
                    <a> je </a>
                    <a> je </a>
                    <a> je </a>
                </div>
            </div>
        </li>
);

export default MenuItem;