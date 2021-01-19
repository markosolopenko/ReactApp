import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showSelectedOrigins } from '../../../features/productsSlice';



const FilterOriginElement = (props) => {
    const store = useSelector(state => state.productsSlice)
    const dispatch = useDispatch()
    const [selected, setSelect] = useState(false)
    const handleChange = (event) => {
        setSelect(!selected)
        dispatch(showSelectedOrigins(
            {checked: event.target.checked, origin: props.origin}))
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
                checked={selected}
                onChange={handleChange}
            />
        </div>
    )
}

export default FilterOriginElement