import React, { useEffect, useState } from 'react';
import CategoriesService from '../../Services/CategoriesService';

import './ProductFilter.css';
import Button from '../Button/CustomButton';
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FilterItems from './FilterItems/FilterItems';

const ProductFilter = props => {

    const [itemTypes, setItemTypes] = useState([]);

    useEffect(() => {
        CategoriesService.getItemTypesByCategory(props.category, props.subCategory)
            .then(res => setItemTypes(res))
            .catch(err => console.error(err));
    }, [props.subCategory, props.category])

    return (
        <>
            <div className='filter-button'>
                <Button onClick={props.clicked}> 
                    Filters 
                    <FontAwesomeIcon 
                            className='FontAwesomeIcon'
                            icon={faFilter}/>
                </Button>
            </div>
            <div className='filter-card'>
                <h3> FILTERS </h3>
                <hr />
                <FilterItems itemTypes={itemTypes}/>
            </div>
        </>
    );
};

export default ProductFilter;