import React from 'react';
import classNames from 'classnames';

import './StockLabel.css';

const StockLabel = props => {
    const stockLabelClasses = classNames({
        'StockLabel': true,
        'InStock': props.stock,
        'OutOfStock': !props.stock
    })

    return (
        <div className={stockLabelClasses}>
            { props.stock ? 'In Stock' : 'Out of Stock' }
        </div>
    );
};

export default StockLabel;