import React from 'react';

import classes from './Logo.module.css';
import LogoSrc from '../../Assets/img/logo.png';

const Logo = props => (
    <div className={classes.LogoWrapper} style={{ height: props.height }}>
        <img src={LogoSrc}/>
    </div>
);

export default Logo;