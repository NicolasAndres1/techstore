import React from 'react';

import classes from './MenuItem.module.css';

const MenuItem = props => (
    <li className={classes.MenuItem}>
        <a href={props.link}> { props.title } </a>
    </li>
);

export default MenuItem;