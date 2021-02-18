import React from 'react'
import { useDispatch } from 'react-redux';
import {productsPerPage, 
        setRange, 
} from '../../features/productsSlice';

const FilterElementsOnPage = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(productsPerPage({number: event.target.value}))
        dispatch(setRange())
    }
    return (
        <div className="amountPerPage">
            <div className="perPageTitle">Number per page: </div>
            <select className="numPerPageSelect" onChange={handleChange}>
                <option className="numPerPage">...</option>
                <option className="numPerPage">10</option>
                <option className="numPerPage">25</option>
                <option className="numPerPage">50</option>
            </select>
        </div>
    )
} 

export default FilterElementsOnPage