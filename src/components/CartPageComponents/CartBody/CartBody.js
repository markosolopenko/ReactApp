import React from 'react'
import { useSelector } from 'react-redux'
import CartBodyElement from '../CartBodyProduct/CartBodyElement'
import './bodyCartPage.css'

const BodyCartPage = (props) => {
    const store = useSelector(state => state)
    return (
        <div className="cartPageBody">   
             {  
               store.mainPageSlice.cartPageSetProducts.map((product, index) =>          
                    <div key={index}>
                        <CartBodyElement 
                            product={product} 
                            deleteProduct={props.deleteProduct}
                        />
                     </div>
                )
            }
            <div className="totalSum">
                TOTAL: {store.mainPageSlice.sumOfPricesAddedProducts}$
            </div>
        </div>
    )
}

export default BodyCartPage;