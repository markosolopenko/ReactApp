import React, { useContext } from 'react'
import {ACTIONS, Context} from '../../context/Context'
import DetailsBody from '../../components/DetailPageComponents/body/DetailsBody'
import HeaderOfPage from '../../components/Header/HeaderOfPage'


const ProductsDetail = () => {
    const value = useContext(Context)
    const increment = () => {
        if (value.state.detailsCount >= 0) {
            value.dispatch({ type: ACTIONS.INCREMENT})
        } 
    }
    const decrement = () => {
        if (value.state.detailsCount >= 1) {
            value.dispatch({ type: ACTIONS.DECREMENT })
        }
    }
    const handleDetailAddToCart = () => {
        value.dispatch({ type: ACTIONS.ADD_DETAILS_TO_CART })
    }
    return (
        <div className="detailsContainer">
            <HeaderOfPage count={value.state.count} sum={value.state.sum} />
            <DetailsBody 
                    product={value.state.product} 
                    increment={increment} 
                    decrement={decrement}
                    count={value.state.detailsCount}
                    addToCart={handleDetailAddToCart}
            />
        </div>
    )
}

export default ProductsDetail;