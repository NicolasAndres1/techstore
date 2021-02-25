import React from "react";
import classnames from 'classnames';

import './Sidedrawer.css';
import Logo from '../../Logo/Logo'
import Backdrop from '../../Backdrop/Backdrop';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidedrawerMenu from "./SidedrawerMenu/SidedrawerMenu";

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
                <div className='login'>
                    Login
                    <button
                        type='button'
                        title='User'
                        className='user-logo'>
                        <FontAwesomeIcon 
                            className='FontAwesomeIcon'
                            icon={faUser}/>
                    </button>
                </div>
                <hr />
                <nav className='menu-wrapper'>
                    <SidedrawerMenu />
                </nav>
            </div>
        </>
    );
};

export default Sidedrawer;

