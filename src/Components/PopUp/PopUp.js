import React from 'react'
import classnames from 'classnames';

import './PopUp.css';
import Backdrop from '../Backdrop/Backdrop';

const PopUp = (props) => {
    const classes = classnames({
        'popup-content': true,
        'open-popup': props.open,
        'close-popup': !props.open
    });

    return (
        <>
            <Backdrop 
                show={props.open}
                clicked={props.closed}/>
            <div className={classes}>
                { props.children }
            </div>
        </>
    )
}

export default PopUp;
