import React from 'react';
import PaginationElement from './paginationElement';
import { useDispatch, useSelector } from 'react-redux';
import './pagination.css';
import {ReactComponent as ArrowBack} from '../../assets/arrowBack.svg';
import {ReactComponent as ArrowForward} from '../../assets/arrowForward.svg';
import {handleArrowForward,
        handleArrowBack,

} from '../../features/productsSlice';

const Pagination = () => {
    const store =  useSelector(state => state)
    const {productsSlice} = store
    const arrowBack = document.querySelector('.arrowBackPaginationDiv');
    const arrowForward = document.querySelector('.arrowForwardPaginationDiv');
    const dispatch = useDispatch()
    const range = []
    if(parseInt(productsSlice.perPage)) {
        arrowBack.style.display = 'flex';
        arrowForward.style.display = 'flex';
        for(let i = 1; i < productsSlice.range; i++) {
            range.push(i)
        }
    }else {
        if(arrowBack && arrowForward) {
            arrowBack.style.display = 'none';
            arrowForward.style.display = 'none'; 
        }
    }

    const handleArrowBackFunc = () => {
        if(productsSlice.page > 1) {
            dispatch(handleArrowBack())
        } 
    }
    const handleArrowForwardFunc = () => {
        if(productsSlice.page < productsSlice.range) {
            dispatch(handleArrowForward())
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
                    range.map((number, index) => 
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