import React from 'react'
import { useSelector } from 'react-redux'
import CartBodyElement from '../CartBodyProduct/CartBodyElement'
import './bodyCartPage.css'

const BodyCartPage = (props) => {
    const store = useSelector(state => state)
    const { cartPageSetProducts, sumOfPricesAddedProducts, cartPageProducts } = store.productsSlice
    return (
        <div className="cartPageBody">   
             {  
               cartPageSetProducts.map((product, index) =>          
                    <div key={index}>
                        <CartBodyElement 
                            product={product} 
                            deleteProduct={props.deleteProduct}
                            cartPageProducts={cartPageProducts}
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