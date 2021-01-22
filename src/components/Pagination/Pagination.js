import React from 'react';
import PaginationElement from './paginationElement';
import { useDispatch, useSelector } from 'react-redux';
import './pagination.css';
import {ReactComponent as ArrowBack} from '../../assets/arrowBack.svg';
import {ReactComponent as ArrowForward} from '../../assets/arrowForward.svg';
import {handleArrowForward,
        handleArrowBack,
        showSelectedNumberProductsPerPage  
} from '../../features/productsSlice';

const Pagination = () => {
    const store =  useSelector(state => state.productsSlice)
    const dispatch = useDispatch()
    const range = () => {
        const range = []
        for(let i = 1; i <= store.range; i++) {
            range.push(i)
        }
        return range;
    }
    const rangeOfPages = range()

    const handleArrowBackFunc = () => {
        if(store.page > 1) {
            dispatch(handleArrowBack())
            dispatch(showSelectedNumberProductsPerPage())
        } 
    }
    const handleArrowForwardFunc = () => {
        if(store.page < store.range) {
            dispatch(handleArrowForward())
            dispatch(showSelectedNumberProductsPerPage())
        } 
    }
    return (
        <div className="pagination">
            <div className="sliderPagination">
                <div className="arrowBackPaginationDiv" 
                    onClick={handleArrowBackFunc}>
                    <ArrowBack className="arrowBackPagination" />
                </div>
                {
                    rangeOfPages.map((number, index) =>
                            <PaginationElement 
                                number={number}
                                key={index} 
                            />
                    ) 
                }
                <div className="arrowForwardPaginationDiv" 
                    onClick={handleArrowForwardFunc}>
                    <ArrowForward className="arrowForwardPagination" />
                </div>
            </div>
        </div>
    )
}

export default Pagination