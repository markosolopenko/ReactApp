import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import CartBodyElement from './CartBodyElement'
import './bodyCartPage.css'
import axios from 'axios';

const BodyCartPage = (props) => {
    const store = useSelector(state => state)
    const dispatch = useDispatch()
    const { cartPageSetProducts, 
            sumOfPricesAddedProducts,  
    } = store.productsSlice
    const nickname = "Timo" 
    const dateOfOrder = new Date().toDateString()
    const [reloaded, setReload] = useState(false)
    const handleOrderClick = () => {
        axios.post("http://localhost:3001/products/order", 
            {dateOfOrder, nickname, cartPageSetProducts})
        setTimeout(() => {
            setReload(true)
        }, 600)   
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