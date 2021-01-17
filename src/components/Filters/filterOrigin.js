import React from "react";
import { useDispatch, useSelector } from "react-redux";

const FilterOrigin = () => {
    // Redux 
    const store = useSelector(state => state.productsSlice)
    const { origins } = store; 

    return (
        <div className="selectOrigin">
            <div className="originTilte">Origins:</div>
            {
                origins.map(origin => 
                    <div className="originList">
                        <label htmlFor="origin" className="originName">
                            {origin.toUpperCase()}
                        </label>
                        <input type="checkbox" name={origin} className="origin" />
                    </div>    
                )
            }
        </div>
    )
}

export default FilterOrigin