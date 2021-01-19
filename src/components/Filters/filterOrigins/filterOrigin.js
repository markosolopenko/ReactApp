import React from "react";
import { useSelector } from "react-redux";
import FilterOriginElement from './filterOriginElement';


const FilterOrigin = () => {
    // Redux 
    const store = useSelector(state => state.productsSlice)
    // const dispatch = useDispatch()
    const { origins } = store; 

    return (
        <div className="selectOrigin">
            <div className="originTilte">Origins:</div>
            { 
                origins.map((origin, id) => 
                    <FilterOriginElement 
                        origin={origin[0]}
                        key={id} 
                    />    
                )
            }
        </div>
    )
}

export default FilterOrigin