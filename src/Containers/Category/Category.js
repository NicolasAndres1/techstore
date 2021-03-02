import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import './Category.css';
import ProductService from '../../Services/ProductsService';
import ProductsContainer from '../../Components/ProductsContainer/ProductsContainer';
import ProductFilter from '../../Components/ProductFilter/ProductFilter';
import Sidedrawer from '../../Components/Sidedrawer/Sidedrawer';
import SidedrawerFilters from '../../Components/Filters/SidedrawerFilters/SidedrawerFilters';

const Category = props => {
    let { category, subCategory } = useParams();
    const [categoryItems, setCategoryItems] = useState([]);
    const [sidedrawerIsVisible, setSidedrawerIsVisible] = useState(false);

    useEffect(() => {
        ProductService.getByCategory(props.match.params.subCategory)
            .then(res => setCategoryItems(res))
            .catch(err => console.error(err));
    }, [subCategory]);

    const showCategory = () => subCategory = subCategory.replace('-',' ').toUpperCase();

    const sideDrawerCloseHandler = () => setSidedrawerIsVisible(false);
    const sideDrawerToggleHandler = () => setSidedrawerIsVisible(!sidedrawerIsVisible);

    return (
        <>
            {<Sidedrawer
                open={sidedrawerIsVisible}
                closed={sideDrawerCloseHandler}>
                    <SidedrawerFilters 
                        isVisible={sidedrawerIsVisible}
                        category={category}
                        subCategory={subCategory}/>
            </Sidedrawer>}
            <div className='category-wrapper'>
                <h2> { showCategory() } </h2>
                <hr />
                <div className='products-wrapper'>
                    <div className='product-filter'>
                        <ProductFilter clicked={sideDrawerToggleHandler}/>
                    </div>
                    {categoryItems ? 
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