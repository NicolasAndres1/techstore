import React from 'react';

import './Input.css';

const input = props => {

    return (
        <input 
            placeholder={props.placeholder}
            className='input'/>
    );
};

export default input;