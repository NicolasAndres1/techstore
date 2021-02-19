import React from 'react';

import classes from './Search.module.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = props => (
    <div className={classes.Search}>
        <input 
            placeholder="What're you looking for?"
            className={classes.Searchbar}/>
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