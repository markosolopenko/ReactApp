import React, {useEffect} from 'react';
import Products from '../../components/Products/ProductBody'
import HeaderOfPage from '../../components/Header/HeaderOfPage'
import {countGenerallyAddedProducts,
        addProductsToCartPage,
        addProductsToCartPageSet, 
        loadData,
        setProductId
} from '../../features/productsSlice';

import Filters from "../../components/Filters/filters";
import BigPhoto from '../../components/Products/BigPhoto';
import Pagination from '../../components/Pagination/Pagination';

// redux 
import { useSelector, useDispatch } from 'react-redux';

const MainPage = () => {
    const store = useSelector(state => state)
    const dispatch = useDispatch()
    const {productsSlice} = store

    const {amountAddedProducts, sumOfPricesAddedProducts, 
           perPage, page, origins, minPrice, maxPrice, cartPageSetProducts
    } = productsSlice

    useEffect(() => {
        dispatch(loadData())
    }, [dispatch, perPage, page, origins, minPrice, maxPrice])
    
    const addProductToDetailsPage = (id) => {
        dispatch(setProductId({id: id}))
    }
    const addToCart = (price, product) => {
        dispatch(countGenerallyAddedProducts({count: 1, price: price}))
        dispatch(addProductsToCartPage({array: [product]} ))
        if (!cartPageSetProducts.includes(product)) {
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
