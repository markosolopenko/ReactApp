import React from 'react';
import Products from '../../components/Products/ProductBody'
import HeaderOfPage from '../../components/Header/HeaderOfPage'
import {countGenerallyAddedProducts,
        setProductToDetailsPage,
        addProductsToCartPage,
        addProductsToCartPageSet, 
} from '../../features/productsSlice';

import Filters from "../../components/Filters/filters";
import BigPhoto from '../../components/Products/BigPhoto';

// redux 
import { useSelector, useDispatch } from 'react-redux';

const MainPage = () => {
    const store = useSelector(state => state)
    const dispatch = useDispatch()

    const { amountAddedProducts, sumOfPricesAddedProducts } = store.productsSlice

    const addProductToDetailsPage = (product) => {
        dispatch(setProductToDetailsPage({product: product}))
    }
    const addToCart = (price, product) => {
        dispatch(countGenerallyAddedProducts({count: 1, price: price}))
        dispatch(addProductsToCartPage({array: [product]} ))
        if (!store.productsSlice.cartPageSetProducts.includes(product)) {
            dispatch(addProductsToCartPageSet({product: product}))
        }
    }
    return (
       <div className="container">
            <HeaderOfPage 
                count={amountAddedProducts} 
                sum={sumOfPricesAddedProducts} 
            />
            <BigPhoto />
            <Filters />
            <Products 
                addToCart={addToCart} 
                addProductToDetails={addProductToDetailsPage} 
            />
        </div>
    )
}

export default MainPage;
