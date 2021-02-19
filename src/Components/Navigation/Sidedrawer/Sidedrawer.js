import React from "react";
import classnames from 'classnames';

import './Sidedrawer.css';
import Logo from '../../Logo/Logo'
import Menu from "../Menu/Menu";
import Backdrop from '../../Backdrop/Backdrop';

const Sidedrawer = props => {
    const attachedClasses = classnames('Sidedrawer', {
        'Open': props.open,
        'Close': !props.open
    })

    return (
        <>  
            <Backdrop 
                show={props.open}
                clicked={props.closed}/>
            <div className={attachedClasses}>
                <div className={'LogoWrapper'}>
                    <Logo />
                </div>
                <hr />
                <div>
                    
                </div>
                <hr />
                <nav className={'MenuWrapper'}>
                    <Menu />
                </nav>
            </div>
        </>
    );
};

export default Sidedrawer;

