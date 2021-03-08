import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import './Category.css';
import ProductService from '../../Services/ProductsService';
import ProductsContainer from '../../Components/ProductsContainer/ProductsContainer';
import ProductFilter from '../../Components/Filters/ProductFilter';
import Sidedrawer from '../../Components/Sidedrawer/Sidedrawer';
import SidedrawerFilters from '../../Components/Filters/SidedrawerFilters/SidedrawerFilters';
import Spinner from '../../Components/Spinner/Spinner';
import Backdrop from '../../Components/Backdrop/Backdrop';

const Category = props => {
    let { category, subCategory } = useParams();
    const [categoryItems, setCategoryItems] = useState([]);
    const [sidedrawerIsVisible, setSidedrawerIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        searchByCategory();
    }, [subCategory]);

    const searchByCategory = () => {
        setIsLoading(true)
        ProductService.getByCategory(props.match.params.subCategory)
        .then(res => setCategoryItems(res))
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false));
    }

    const sideDrawerCloseHandler = () => setSidedrawerIsVisible(false);
    const sideDrawerToggleHandler = () => setSidedrawerIsVisible(!sidedrawerIsVisible);

    const filtersToApply = (itemTypes) => {
        setIsLoading(true)
        ProductService.getByItemTypes(itemTypes)
                .then(res => setCategoryItems(res))
                .catch(err => console.error(err))
                .finally(() => setIsLoading(false));
    }

    return (
        <>
            <div className='checkout-spinner'>
                <Backdrop show={isLoading}>
                    <Spinner />
                </Backdrop>
            </div>
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
                            {categoryItems.length > 0
                                ? (
                                <div className='category-items'>
                                    <ProductsContainer 
                                        items={categoryItems}/>
                                </div>
                                )
                                : (
                                    <h2 className='category-no-items'> THERE ARE NO ITEMS TO DISPLAY </h2>
                                )
                            }
                        </div>
                    </div>
            
        </>
    );
}

export default Category;