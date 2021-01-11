import React, { useContext } from 'react'
import BodyCartPage from '../../components/CartPageComponents/CartBody/CartBody'
import HeaderOfPage from '../../components/Header/HeaderOfPage'
import { ACTIONS, Context } from '../../context/Context'


const CartPage = () => {
    const value = useContext(Context)
    const deleteProduct = (id) => {
        value.dispatch({ type: ACTIONS.DELETE_PRODUCT, payload: { id: id } })
    }
    return (
        <div className="CartPage">
            <HeaderOfPage sum={value.state.sum} count={value.state.count} />
            <BodyCartPage deleteProduct={deleteProduct} />
        </div>
    )
}

export default CartPage