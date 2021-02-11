import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import CartBodyElement from './CartBodyElement'
import './bodyCartPage.css'
import axios from 'axios';
import {handleOrderEvent} from '../../features/productsSlice';

const BodyCartPage = (props) => {
    const store = useSelector(state => state)
    const dispatch = useDispatch()
    const {orderedProducts} = store.formSlice
    const { cartPageSetProducts, 
            sumOfPricesAddedProducts,  
    } = store.productsSlice
    const nickname = "Timo" 
    const dateOfOrder = new Date().toDateString()
    const [reloaded, setReload] = useState(false)
    const handleOrderClick = () => {
        axios.post("http://localhost:3001/products/order", 
            {dateOfOrder, nickname, orderedProducts, cartPageSetProducts})
        setTimeout(() => {
            dispatch(handleOrderEvent())
            setReload(true)
        }, 400)   
    }
    return (
        <div className="cartPageBody">  
            {reloaded ? <Redirect to="/products/ordereds" /> :
                <div className="some">
                    {  
                        cartPageSetProducts.map((product, index) =>          
                            <div key={index}>
                                <CartBodyElement 
                                    product={product} 
                                    deleteProduct={props.deleteProduct}
                                />
                            </div>
                        )
                    }
                    <div className="totalSum" onClick={handleOrderClick}>
                        Order: {sumOfPricesAddedProducts}$
                    </div>
                </div>
                }
        </div>
    )
}

export default BodyCartPage;