import React, { useEffect, useState } from 'react';
import ProductService from '../../Services/ProductsService';

const ProductDetails = props => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        ProductService.getByUrl('GeForce-GTX-1650-SUPER-GAMING-X')
            .once('value', onProductChange);
    }, []);

    const onProductChange = (items) => {
        items.forEach((item) => {
            let data = item.val();

            setProduct({
                id: data.id,
                name: data.name,
                url: data.url
            });
        });
    };

    return (
        <>
            <div> { product ? 
                    <p> { product.id } </p> : null } </div>
        </>
    );
};

export default ProductDetails;