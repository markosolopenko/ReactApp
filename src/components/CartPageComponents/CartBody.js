import React from 'react'
import { useSelector } from 'react-redux'
import CartBodyElement from './CartBodyElement'
import './bodyCartPage.css'

const BodyCartPage = (props) => {
    const store = useSelector(state => state)
    const { cartPageSetProducts, sumOfPricesAddedProducts } = store.productsSlice
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
            <div className="totalSum">
                TOTAL: {sumOfPricesAddedProducts}$
            </div>
        </div>
    )
}

export default BodyCartPage;