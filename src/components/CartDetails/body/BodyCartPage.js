import React, { useContext } from 'react'
import CartBodyElement from './CartBodyElement'
import '../../../styles/CartPage/bodyCartPage.css'
import {Context} from '../../../context/Context';

const BodyCartPage = (props) => {
    const value = useContext(Context)
    return (
        <div className="cartPageBody">
            {
                value.state.cartProducts.map((product, id) =>   
                    <div key={id}>
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