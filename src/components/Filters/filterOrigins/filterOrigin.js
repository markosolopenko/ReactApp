import React from "react";
import FilterOriginElement from './filterOriginElement';


const FilterOrigin = (props) => {
    return (
        <div className="selectOrigin">
            <div className="originTilte">Origins:</div>
            { 
                props.origins.map((origin, id) => 
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