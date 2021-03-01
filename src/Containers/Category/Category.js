import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import './Category.css';
import ProductService from '../../Services/ProductsService';
import ProductsContainer from '../../Components/ProductsContainer/ProductsContainer';
import ProductFilter from '../../Components/ProductFilter/ProductFilter';

const Category = props => {
    let { category } = useParams();
    const [categoryItems, setCategoryItems] = useState([]);

    useEffect(() => {
        ProductService.getByCategory(props.match.params.category)
            .on('value', categoryItemsChanges);
    }, [category]);

    const categoryItemsChanges = (items) => {
        const categoriesItemsArray = [];

        items.forEach(item => {
            let key = item.key;
            let data = item.val();

            categoriesItemsArray.push({
                id: key,
                img: data.img,
                name: data.name,
                price: data.price,
                stock: data.stock
            });
        })

        setCategoryItems(categoriesItemsArray);
    }

    const showCategory = () => category = category.replace('-',' ').toUpperCase();

    return (
        <div className='category-wrapper'>
            <h2> { showCategory() } </h2>
            <hr />
            <div className='products-wrapper'>
                <div className='product-filter'>
                    <ProductFilter/>
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
    );
}

export default Category;