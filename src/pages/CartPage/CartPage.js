import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { mainPageSlice } from '../../features/mainPageSlice';
import BodyCartPage from '../../components/CartPageComponents/CartBody/CartBody'
import HeaderOfPage from '../../components/Header/HeaderOfPage'
import ProductElement from '../../components/Products/ProductElement';


const CartPage = () => {
    const store = useSelector(state => state)
    const { amountOfAddedProducts, sumOfPricesAddedProducts } = store.mainPageSlice
    const dispatch = useDispatch()
    const deleteProduct = (id, count, value) => {
        dispatch(mainPageSlice.actions.deleteProductFromCart({payload: {id: id, count: count, value: value}}))
    }
    return (
        <div className="CartPage">
            <HeaderOfPage 
                sum={sumOfPricesAddedProducts} 
                count={amountOfAddedProducts} 
            />
            <BodyCartPage  deleteProduct={deleteProduct} />
        </div>
    )
}

export default CartPage