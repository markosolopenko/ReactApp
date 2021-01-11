import React, {useContext} from 'react';
import Products from '../../components/MainPageComponents/products/Products'
import HeaderOfPage from '../../components/MainPageComponents/header/HeaderOfPage'
import { ACTIONS, Context } from '../../context/Context'

const MainPage = () => {
    const values = useContext(Context) 

    const addProductToDetailsPage = (product) => {
        values.dispatch({ type: ACTIONS.ADD_PRODUCT_TO_DETAILS, payload: {product : product} })
    }
    const addToCart = (value, product) => {
        values.dispatch({ type: ACTIONS.ADD_TO_CART, payload: {value: value} })
        values.dispatch({ type: ACTIONS.IF_EXIST, payload: {product: product} })
        if (!values.state.cartProducts.includes(product)) {
            values.dispatch({ type: ACTIONS.ADD_PRODUCT_TO_CART, payload: {product: product} })
        }
        
    }
        
    return (
       <div className="container">
            <HeaderOfPage 
                count={values.state.count} 
                sum={values.state.sum} 
            />
            <Products 
                addToCart={addToCart} 
                addProductToDetails={addProductToDetailsPage} 
            />
        </div>
    )
}

export default MainPage;