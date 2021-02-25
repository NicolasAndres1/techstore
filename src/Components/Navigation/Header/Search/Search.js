import React, { useState } from 'react';
import classnames from 'classnames';

import './Search.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../../../Input/Input';

const Search = props => { 
    const [showInputSearch, setShowInputSearch] = useState(false);

    const toggleShowInputSearch = () => setShowInputSearch(!showInputSearch);

    const showInputSearchClasses = classnames({
        'search-input': true,
        'show-input': showInputSearch,
        'hide-input': !showInputSearch
    });

    return (
        <div className='search'>
            <div className={showInputSearchClasses}>
                <Input placeholder='What are you looking for?'/>
            </div>
            <div className='search-input-web-size'>
                <Input placeholder='What are you looking for?'/>
            </div>
            <button
                onClick={toggleShowInputSearch}
                className={'search-button'}
                type='submit'
                title='Search'>
                <FontAwesomeIcon 
                    className={'FontAwesomeIcon'}
                    icon={faSearch}/>
            </button>
        </div>
    );
};

export default Search;