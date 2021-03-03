import React from "react";
import classnames from 'classnames';

import './Sidedrawer.css'
import Backdrop from '../../Components/Backdrop/Backdrop';


const Sidedrawer = props => {
    const attachedClasses = classnames('sidedrawer', {
        'open': props.open,
        'close': !props.open
    })

    return (
        <>  
            <Backdrop 
                show={props.open}
                clicked={props.closed}/>
            <div className={attachedClasses}>
                { props.children }
            </div>
        </>
    );
};

export default Sidedrawer;

