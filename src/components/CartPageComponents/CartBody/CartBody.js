import React, { useContext } from 'react'
import CartBodyElement from '../CartBodyProduct/CartBodyElement'
import './bodyCartPage.css'
import {Context} from '../../../context/Context';

const BodyCartPage = (props) => {
    const value = useContext(Context)
    return (
        <div className="cartPageBody">
            {  
               value.state.cartProducts.map((product, index) =>  
                    
                    <div key={index}>
                        <CartBodyElement 
                            product={product} 
                            deleteProduct={props.deleteProduct}
                        />
                     </div>
                )
            }
            <div className="totalSum">
                TOTAL: {value.state.sum}$
            </div>
        </div>
    )
}

export default BodyCartPage;