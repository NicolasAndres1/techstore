import React, { useEffect, useState } from 'react';

import './SidedrawerFilters.css';
import CategoriesService from '../../../Services/CategoriesService';
import FilterItems from '../FilterItems/FilterItems';

const SidedrawerFilters = props => {
    const [itemTypes, setItemTypes] = useState([]);

    useEffect(() => {
        CategoriesService.getItemTypesByCategory(props.category, props.subCategory)
            .then(res => setItemTypes(res))
            .catch(err => console.error(err));
    }, [props.subCategory, props.category])

    const checkFiltersToApply = (filters) => {
        if(filters.length === itemTypes.length) props.searchByCategory(true)
        else props.filtersChanges(filters);
    }

    return (
        <>
            <div className='color'> SELECT FILTERS </div>
            <hr />
            <FilterItems 
                itemTypes={itemTypes}
                close={props.closed}
                filtersChanges={checkFiltersToApply}/>
        </>
    );
};

export default SidedrawerFilters;