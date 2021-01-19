import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleCheckbox } from '../../../features/productsSlice';



const FilterOriginElement = (props) => {
    const store = useSelector(state => state.productsSlice)
    const dispatch = useDispatch()

    return (
        <div className="originList">
            <label htmlFor="origin" className="originName">
                {props.origin.toUpperCase()}
            </label>
            <input  
                type="checkbox" 
                name={props.origin} 
                className="origin"
                defaultChecked={store.origins.forEach(arr => 
                    arr[0] === props.origin ? arr[1] : null     
                )}
                onChange={(event) => dispatch(handleCheckbox({name: event.target.name}))}
            />
        </div>
    )
}

export default FilterOriginElement