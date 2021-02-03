import React from 'react'
import { useSelector } from 'react-redux'
import CartBodyElement from './CartBodyElement'
import './bodyCartPage.css'
import axios from 'axios';

const BodyCartPage = (props) => {
    const store = useSelector(state => state)
    const { cartPageSetProducts, sumOfPricesAddedProducts } = store.productsSlice
    const handleBuyClick = () => {
        for(let i = 0; i < cartPageSetProducts.length; i++) {
            axios.post("http://localhost:3001/products/order", cartPageSetProducts[i])
        } 
    }
    return (
        <div className="cartPageBody">   
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
            <div className="totalSum" onClick={handleBuyClick}>
                BUY: {sumOfPricesAddedProducts}$
            </div>
        </div>
    )
}

export default BodyCartPage;