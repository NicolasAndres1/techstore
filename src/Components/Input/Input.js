import React from 'react';

import './Input.css';

const input = props => {

    return (
        <input 
            className='input'
            type={props.type}
            placeholder={props.placeholder}
            required={props.required}
            autoFocus={props.autoFocus}
            onChange={props.onChange}/>
    );
};

export default input;