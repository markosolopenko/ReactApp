import React from 'react'
import { ReactComponent as CartSvg } from '../../icons/cart.svg'
import bigphoto from '../../pictures/bigphoto.jpg'


const HeaderOfPage = () => {
    return (
        <div className="header">
            <div className="toolbar">
                <div className="logo">
                    <div className="logoText">Yalantis shop</div>
                </div>
                <div className="orderedProduct">
                    <div className="cartSvgOrdered">
                        <CartSvg />
                    </div>
                    <div className="amountOrdered">
                        <button className="amountOrderedButton">4</button>
                    </div>
                    <div className="priceOrdered">
                        100$
                    </div>
                </div>
            </div>
            <div className="bigPhoto">
                <img src={bigphoto} />
            </div>
        </div>
    )
}

export default HeaderOfPage;