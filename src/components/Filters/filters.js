import React from 'react'
import './filters.css'

import FilterElementsOnPage from './filterElementsOnPage';
import FilterOrigin from './filterOrigin';
import FilterPrices from './filterPrices';


const Filters = () => {
    return (
        <div className="filters">
            <FilterElementsOnPage />
            <FilterOrigin />
            <FilterPrices />
        </div>
    )
} 

export default Filters