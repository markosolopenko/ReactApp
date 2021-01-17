import React from 'react'

const FilterElementsOnPage = () => {
    return (
        <div className="amountPerPage">
            <div className="perPageTitle">Number per page: </div>
            <select className="numPerPageSelect">
                <option className="numPerPage">10</option>
                <option className="numPerPage">15</option>
                <option className="numPerPage">20</option>
            </select>
        </div>
    )
} 

export default FilterElementsOnPage