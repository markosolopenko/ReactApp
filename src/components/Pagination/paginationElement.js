import React from 'react';
import {setPage} from '../../features/productsSlice';
import { useDispatch, useSelector } from 'react-redux';


const PaginationElement = ({number}) => {
    const dispatch = useDispatch() 
    const store = useSelector(state => state.productsSlice)
    const handleChange = () => {
        if(parseInt(number)) {
            dispatch(setPage({page: number}))
        }
    }
    return (
        <div className={number === store.page ? "currentPage": "numberOfPageButton"}
            onClick={handleChange}
        > 
            {number}
        </div>
    )
}

export default PaginationElement