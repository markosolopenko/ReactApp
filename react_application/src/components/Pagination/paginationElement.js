import React from 'react';
import {setPage} from '../../features/productsSlice';
import { useDispatch, useSelector } from 'react-redux';


const PaginationElement = ({page, pagin, range}) => {
    const dispatch = useDispatch() 
    const store = useSelector(state => state)
    const {productsSlice} = store
    const handleClick= () => {
        if(parseInt(page)) {
            dispatch(setPage({page: page}))
        }
    }
    return (
        <div className={page === productsSlice.page ? "currentPage": "numberOfPageButton"}
            onClick={handleClick}
        > 
            {page}
        </div>
    )
}

export default PaginationElement