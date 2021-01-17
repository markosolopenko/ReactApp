import React from 'react'

const FilterPrices = () => {
    return (
        <div className="min_max">
            <label htmlFor="prices" className="min_max_label">Price: </label>
            <input type="text" className="min" placeholder="min" />
            <div className="dash">-</div>
            <input type="text" className="max" placeholder="max" />
        </div>
    )
}

export default FilterPrices