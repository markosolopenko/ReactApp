import React from 'react'
import './filters.css'
import { useSelector } from 'react-redux';

import FilterElementsOnPage from './filterElementsOnPage';
import FilterOrigin from './filterOrigins/filterOrigin';
import FilterPrices from './filterPrices';


const Filters = () => {
    const store = useSelector(state => state.productsSlice)

    const { origins } = store; 
    return (
        <div className="filters">
            <FilterElementsOnPage />
            <FilterOrigin origins={origins} />
            <FilterPrices />
        </div>
    )
} 

export default Filters