import React from 'react';
import Products from '../../components/Products/ProductBody'
import HeaderOfPage from '../../components/Header/HeaderOfPage'
import { mainPageSlice } from '../../features/mainPageSlice';

// redux 
import { useSelector, useDispatch } from 'react-redux';

const MainPage = () => {
    const store = useSelector(state => state)
    const dispatch = useDispatch()

    const { amountAddedProducts, sumOfPricesAddedProducts} = store.mainPageSlice

    const addProductToDetailsPage = (product) => {
        dispatch(mainPageSlice.actions.setDetailsPageProduct({payload: {product: product}}))
        dispatch(mainPageSlice.actions.addProductsCartPageSet({payload: {product: product}}))
    }
    const addToCart = (price, product) => {
        const array = [product]
        dispatch(mainPageSlice.actions.summarizeAll({payload: {price: price, value: 1}})) 
        dispatch(mainPageSlice.actions.addProductsToCartPage({ payload: {array: array} }))
        if (!store.mainPageSlice.cartPageSetProducts.includes(product)) {
            dispatch(mainPageSlice.actions.addProductsCartPageSet({payload: {product: product}}))
        }
    }
    return (
       <div className="container">
            <HeaderOfPage 
                count={amountAddedProducts} 
                sum={sumOfPricesAddedProducts} 
            />
            <Products 
                addToCart={addToCart} 
                addProductToDetails={addProductToDetailsPage} 
            />
        </div>
    )
}

export default MainPage;
