import React, { useEffect, useState } from 'react';

import './FilterItems.css';
import Button from '../../Button/CustomButton';

const FilterItems = ({itemTypes, close, filtersChanges}) => {
    const [itemTypesState, setItemTypesState] = useState([]);

    useEffect(() => {
        const itemTypesArray = [];

        itemTypes.forEach(item => {
            itemTypesArray.push({
                item: item,
                isChecked: false
            })
        });

        setItemTypesState(itemTypesArray);
    }, [itemTypes]);

    const handleCheck = id => {
        const itemTypesArray = itemTypesState;
        itemTypesArray[id].isChecked = !itemTypesArray[id].isChecked;
        setItemTypesState(itemTypesArray);
    };

    const applyFiltersHandler = props => {
        if(close) close(props);
        let itemTypesArray = itemTypesState
                                .filter(item => item.isChecked);
        
                                
        if(itemTypesArray.length > 0) {
            itemTypesArray = itemTypesArray
                .map(({item}) => item);
        }
        else {
            itemTypesArray = itemTypesState
                .map(({item}) => item);
        }

        filtersChanges(itemTypesArray);
    }

    return (
        <>
            {itemTypesState
                ? (
                    <>
                        <ul className='filter-list'>
                            {itemTypesState.map((data, key) => 
                                <li 
                                    key={key}
                                    className='filter-item'>
                                    <label 
                                        className='filter-selector'
                                        onChange={e => handleCheck(key)}>
                                        <input 
                                            type='checkbox' 
                                            value={data.item}/>
                                        {data.item}
                                    </label>
                                </li>
                            )}
                        </ul>
                        <hr />
                        <div className='apply-filters-button'>
                            <Button onClick={applyFiltersHandler}> Apply </Button>
                        </div>
                    </>
                )
                : null
            }
        </>
    );
};

export default FilterItems;