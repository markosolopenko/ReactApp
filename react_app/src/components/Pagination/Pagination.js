import React from 'react';
import PaginationElement from './paginationElement';
import { useDispatch, useSelector } from 'react-redux';
import './pagination.css';
import {ReactComponent as ArrowBack} from '../../assets/arrowBack.svg';
import {ReactComponent as ArrowForward} from '../../assets/arrowForward.svg';
import {handleArrowForward,
        handleArrowBack,
} from '../../features/productsSlice';
import { moveAheadArrow, moveBackArrow } from './paginationActions';

const Pagination = () => {
    const store =  useSelector(state => state)
    const {productsSlice} = store
    const arrowBack = document.querySelector('.arrowBackPaginationDiv');
    const arrowForward = document.querySelector('.arrowForwardPaginationDiv');
    const pagin = document.querySelector('.sliderPagination');
    const dispatch = useDispatch()
    const range = [];
    if(parseInt(productsSlice.perPage)) {
        arrowBack.style.display = 'flex';
        arrowForward.style.display = 'flex';
        for(let i = 1; i <= productsSlice.range; i++) {
            range.push(i)
        }
        console.log(range);
    }else {
        if(arrowBack && arrowForward) {
            arrowBack.style.display = 'none';
            arrowForward.style.display = 'none';        
        }
    }
        
   
        
    
    const handleArrowBackFunc = () => {
        if(productsSlice.page > 1) {
            dispatch(handleArrowBack())
            moveBackArrow(pagin, productsSlice.page, range.length)
        } 
    }
    const handleArrowForwardFunc = () => {
        if(productsSlice.page < productsSlice.range) {
            dispatch(handleArrowForward())
            moveAheadArrow(pagin, productsSlice.page, range.length)
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
                    range.map((page, index) => 
                        <PaginationElement 
                            page={page}
                            key={index} 
                            pagin={pagin}
                            range={productsSlice.range}
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