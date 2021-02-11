import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {deleteProductFromCart,
        subtractFromAddedProducts } from '../../features/productsSlice'
import BodyCartPage from '../../components/CartPage/CartBody'
import HeaderOfPage from '../../components/Header/HeaderOfPage'


const CartPage = () => {
    const store = useSelector(state => state)
    const { amountAddedProducts, sumOfPricesAddedProducts } = store.productsSlice
    const dispatch = useDispatch()
    const deleteProduct = (id, count, price) => {
        dispatch(deleteProductFromCart({id: id}))
        dispatch(subtractFromAddedProducts({count: count, price: price}))
    }
    return (
        <div className="CartPage">
            <HeaderOfPage 
                sum={sumOfPricesAddedProducts} 
                count={amountAddedProducts} 
            />
            <BodyCartPage deleteProduct={deleteProduct} />
        </div>
    )
}

export default CartPage