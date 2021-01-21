import React from 'react';
import {setPage, 
        showSelectedNumberProductsPerPage, 
} from '../../features/productsSlice';
import { useDispatch, useSelector } from 'react-redux';


const PaginationElement = (props) => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.productsSlice)
    const handleChange = () => {
        dispatch(setPage({page: props.number}))
        dispatch(showSelectedNumberProductsPerPage())  
    }

    return (
        <div className={props.number === store.page ? "currentPage":"numberOfPageButton"}
             onClick={handleChange}>{props.number}</div>
    )
}

export default PaginationElement