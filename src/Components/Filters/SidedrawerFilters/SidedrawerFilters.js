import React, { useEffect, useState } from 'react';

import './SidedrawerFilters.css';
import CategoriesService from '../../../Services/CategoriesService';

const SidedrawerFilters = props => {
    const [itemTypes, setItemTypes] = useState([]);

    // useEffect(() => {
    //     CategoriesService.getItemTypesByCategory(props.category, props.subCategory)
    //         .on('value', snapshot => {
    //             const itemTypesArray = [];

    //             snapshot.forEach(item => {
    //                 const data = item.val();
    //                 console.log(data);
    //             })
    //         })
    // }, [props.subCategory])

    return (
        <>
            <div className='color'> SELECT FILTERS </div>
            <hr />
            
        </>
    );
};

export default SidedrawerFilters;