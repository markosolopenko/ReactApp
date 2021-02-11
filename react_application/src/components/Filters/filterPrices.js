import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setMaxPrice, setMinPrice} from '../../features/productsSlice';


const FilterPrices = () => {
    const dispatch = useDispatch()  
    const store = useSelector(state => state)
    const {productsSlice} = store  
    const handleMin = (e) => {
        dispatch(setMinPrice({min: e.target.value}))
    }
    const handleMax = (e) => {
        dispatch(setMaxPrice({max: e.target.value}))
    }

    return (
        <div className="min_max">
            <label htmlFor="prices" className="min_max_label">Price: </label>
            <input 
                type="text" 
                className="min"
                placeholder="min" 
                value={productsSlice.minPrice}
                onChange={handleMin}
            />
            <div className="dash">-</div>
            <input 
                type="text" 
                className="max" 
                placeholder="max"
                value={productsSlice.maxPrice}
                onChange={handleMax} 
            />
        </div>
    )
}

export default FilterPrices