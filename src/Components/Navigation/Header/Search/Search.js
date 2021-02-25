import React from 'react';

import classes from './Search.module.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../../../Input/Input';

const Search = props => (
    <div className={classes.Search}>
        <Input placeholder='What are you looking for?'/>
        <button
            className={classes.SearchButton}
            type='submit'
            title='Search'>
            <FontAwesomeIcon 
                className='FontAwesomeIcon'
                icon={faSearch}/>
        </button>
    </div>
);

export default Search;