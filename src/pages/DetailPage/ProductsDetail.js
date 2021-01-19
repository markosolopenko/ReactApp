import React from 'react'
import DetailsBody from '../../components/DetailPageComponents/DetailsBody/DetailsBody'
import HeaderOfPage from '../../components/Header/HeaderOfPage'
// Redux
import { useSelector, useDispatch } from 'react-redux';
import {countGenerallyAddedProducts,
        addProductsToCartPage,
        decreaseProductFromDetails, 
        addProductsToCartPageSet } from '../../features/productsSlice';
import { handleChange, addToInput,  subtractFromInput } from '../../features/inputSlice';


const ProductsDetail = () => {
    const store = useSelector(state => state)
    const dispatch = useDispatch()
    const { value } = store.inputSlice
    const { amountAddedProducts, sumOfPricesAddedProducts, product } = store.productsSlice
    const increment = () => {
        if (value >= 0) {
           dispatch(addToInput())
        } 
    }
    const decrement = () => {
        if (value >= 1) {
            dispatch(subtractFromInput())
            dispatch(decreaseProductFromDetails())
        }
    }
    const handleChanges = (event) => {
        dispatch(handleChange({value: event.target.value}))
    }
    const detailsPageAddToCart = () => {
        const sum = value * product.price;
        const array = [];
        for(let i = 0; i < value; i++) {
            array.push(product)
        }
        dispatch(countGenerallyAddedProducts({count: value, price: sum}))
        dispatch(addProductsToCartPage({array: array}))
        if(!store.productsSlice.cartPageSetProducts.includes(product)) {
             dispatch(addProductsToCartPageSet({product: product}))
        }
           
    }

    return (
        <div className="detailsContainer">
            <HeaderOfPage 
                    count={amountAddedProducts} sum={sumOfPricesAddedProducts} 
            />
            <DetailsBody 
                    handleChange={handleChanges}
                    product={product} 
                    increment={increment} 
                    decrement={decrement}
                    count={value}
                    addToCart={detailsPageAddToCart}
            />
        </div>
    )
}

export default ProductsDetail;