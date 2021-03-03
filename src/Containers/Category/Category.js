import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import './Category.css';
import ProductService from '../../Services/ProductsService';
import ProductsContainer from '../../Components/ProductsContainer/ProductsContainer';
import ProductFilter from '../../Components/Filters/ProductFilter';
import Sidedrawer from '../../Components/Sidedrawer/Sidedrawer';
import SidedrawerFilters from '../../Components/Filters/SidedrawerFilters/SidedrawerFilters';
import Spinner from '../../Components/Spinner/Spinner';

const Category = props => {
    let { category, subCategory } = useParams();
    const [categoryItems, setCategoryItems] = useState([]);
    const [sidedrawerIsVisible, setSidedrawerIsVisible] = useState(false);

    useEffect(() => {
        searchByCategory();
    }, [subCategory]);

    const searchByCategory = () => {
        ProductService.getByCategory(props.match.params.subCategory)
        .then(res => setCategoryItems(res))
        .catch(err => console.error(err));
    }

    const sideDrawerCloseHandler = () => setSidedrawerIsVisible(false);
    const sideDrawerToggleHandler = () => setSidedrawerIsVisible(!sidedrawerIsVisible);

    const filtersToApply = (itemTypes) => {
        ProductService.getByItemTypes(itemTypes)
                .then(res => setCategoryItems(res))
                .catch(err => console.error(err));
    }

    return (
        <>
            <Sidedrawer
                open={sidedrawerIsVisible}
                closed={sideDrawerCloseHandler}>
                    <SidedrawerFilters 
                        isVisible={sidedrawerIsVisible}
                        category={category}
                        subCategory={subCategory}
                        closed={sideDrawerCloseHandler}
                        filtersChanges={filtersToApply}
                        searchByCategory={searchByCategory}/>
            </Sidedrawer>
            <div className='category-wrapper'>
                <h2> { subCategory.replace('-',' ').toUpperCase() } </h2>
                <div className='products-wrapper'>
                    <div className='product-filter'>
                        <ProductFilter 
                            category={category}
                            subCategory={subCategory}
                            clicked={sideDrawerToggleHandler}
                            filtersChanges={filtersToApply}
                            searchByCategory={searchByCategory}/>
                    </div>
                    {categoryItems.length > 0 ? 
                        <div className='category-items'>
                            <ProductsContainer 
                                items={categoryItems}/>
                        </div>
                        : null
                    }
                </div>
            </div>
        </>
    );
}

export default Category;