import React from "react";
import FilterOriginElement from './filterOriginElement';


const FilterOrigin = (props) => {
    return (
        <div className="selectOrigin">
            <div className="originTilte">Origins:</div>
            { 
                ['asia', 'europe', 'africa', 'usa'].map((origin, id) => 
                    <FilterOriginElement 
                        origin={origin}
                        key={id} 
                    />    
                )
            }
        </div>
    )
}

export default FilterOrigin