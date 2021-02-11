import React from 'react';
import { useDispatch } from 'react-redux';
import { setOrigin } from '../../../features/productsSlice';



const FilterOriginElement = (props) => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(setOrigin({origin: event.target.name}))
    }
    return (
        <div className="originList">
            <label htmlFor="origin" className="originName">
                {props.origin.toUpperCase()}
            </label>
            <input  
                type="checkbox" 
                name={props.origin} 
                className="origin"
                onChange={handleChange}
            />
        </div>
    )
}

export default FilterOriginElement