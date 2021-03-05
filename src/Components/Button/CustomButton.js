import React from 'react';

import classes from './CustomButton.module.css';

const CustomButton = props => (
    <button 
        type={props.type}
        onClick={props.onClick} 
        className={classes.Button}
        value={props.value}>
        { props.children }
    </button>
);

export default CustomButton;