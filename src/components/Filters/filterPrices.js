import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { showProductsByPrices } from '../../features/productsSlice';


const FilterPrices = () => {
    const dispatch = useDispatch()    
    const [state, setValue] = useState({min: '', max: ''})
    const handleMin = (event) => {
        const value = event.target.value    
        if(!isNaN(value) && value >= 0) {
            setValue(state => ({
                ...state,
                min: Number(value)
            }))
            dispatch(showProductsByPrices({min: Number(value), max: state.max}))
        }
        
    } 
    const handleMax = (event) => {
        const value = event.target.value    
        if(!isNaN(value) && value >= 0) {
            setValue(state => ({
                ...state,
                max: Number(value)
            }))
            dispatch(showProductsByPrices({min: state.min, max: Number(value)}))
        }
    }

    return (
        <div className="min_max">
            <label htmlFor="prices" className="min_max_label">Price: </label>
            <input 
                type="text" 
                className="min"
                placeholder="min" 
                value={state.min}
                onChange={handleMin}
            />
            <div className="dash">-</div>
            <input 
                type="text" 
                className="max" 
                placeholder="max"
                value={state.max}
                onChange={handleMax} 
            />
        </div>
    )
}

export default FilterPrices