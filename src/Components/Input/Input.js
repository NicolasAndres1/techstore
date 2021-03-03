import React from 'react';

import './Input.css';

const input = props => {

    return (
        <input 
            id={props.id}
            className='input'
            type={props.type}
            placeholder={props.placeholder}
            required={props.required}
            autoFocus={props.autoFocus}
            onChange={props.onChange}
            onKeyPress={props.keyPressed}/>
    );
};

export default input;