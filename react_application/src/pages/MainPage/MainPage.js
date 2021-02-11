import React, {useEffect} from 'react';
import Products from '../../components/Products/ProductBody'
import HeaderOfPage from '../../components/Header/HeaderOfPage'
import {countGenerallyAddedProducts,
        setProductToDetailsPage,
        addProductsToCartPage,
        addProductsToCartPageSet, 
        fetchProducts,
} from '../../features/productsSlice';

import Filters from "../../components/Filters/filters";
import BigPhoto from '../../components/Products/BigPhoto';
import Pagination from '../../components/Pagination/Pagination';

// redux 
import { useSelector, useDispatch } from 'react-redux';

const MainPage = () => {
    const store = useSelector(state => state.productsSlice)
    const dispatch = useDispatch()

    const {amountAddedProducts, sumOfPricesAddedProducts, 
           perPage, page, origins, minPrice, maxPrice
        } = store

    useEffect(() => {
        dispatch(fetchProducts({page, perPage, origins, minPrice, maxPrice}))
    }, [dispatch, perPage, page, origins, minPrice, maxPrice])
    
    const addProductToDetailsPage = (product) => {
        dispatch(setProductToDetailsPage({product: product}))
    }
    const addToCart = (price, product) => {
        dispatch(countGenerallyAddedProducts({count: 1, price: price}))
        dispatch(addProductsToCartPage({array: [product]} ))
        if (!store.cartPageSetProducts.includes(product)) {
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
            <Pagination />
        </div>
    )
}

export default MainPage;
