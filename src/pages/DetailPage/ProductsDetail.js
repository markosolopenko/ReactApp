import React from 'react'
import DetailsBody from '../../components/DetailPageComponents/DetailsBody/DetailsBody'
import HeaderOfPage from '../../components/Header/HeaderOfPage'
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { mainPageSlice } from '../../features/mainPageSlice';
import { detailPageSlice } from '../../features/detailPageSlice';


const ProductsDetail = () => {
    const store = useSelector(state => state)
    const { amountAddedProducts, sumOfPricesAddedProducts, product } = store.mainPageSlice
    const { detailsCount } = store.detailPageSlice
    const dispatch = useDispatch()
    const increment = () => {
        if (detailsCount >= 0) {
           dispatch(detailPageSlice.actions.increment({payload: {value: product.price}}))
           dispatch(mainPageSlice.actions.addProductsToCartPage({payload: {product: product}}))
        } 
    }
    const decrement = () => {
        if (detailsCount >= 1) {
            dispatch(detailPageSlice.actions.decrement({ payload: {price: product.price} }))
            dispatch(mainPageSlice.actions.decreaseProductFromCart())
        }
    }
    const handleChange = (event) => {
        dispatch(detailPageSlice.actions.handleChange({payload: {value: event.target.value}}))
    }
    const detailsPageAddToCart = () => {
        const sum = detailsCount * product.price;
        const array = [];
        for(let i = 0; i < detailsCount; i++) {
            array.push(product)
        }
        dispatch(mainPageSlice.actions.summarizeAll({payload: 
            {value: detailsCount, price: sum, array: array}}
        ))
    }

    return (
        <div className="detailsContainer">
            <HeaderOfPage 
                    count={amountAddedProducts} sum={sumOfPricesAddedProducts} 
            />
            <DetailsBody 
                    handleChange={handleChange}
                    product={product} 
                    increment={increment} 
                    decrement={decrement}
                    count={detailsCount}
                    addToCart={detailsPageAddToCart}
            />
        </div>
    )
}

export default ProductsDetail;