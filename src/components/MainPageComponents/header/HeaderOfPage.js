import React from 'react'
import { ReactComponent as CartSvg } from '../../../icons/cart.svg'
import bigphoto from '../../../pictures/bigphoto.jpg'
import '../../../styles/MainPage/header.css'


const HeaderOfPage = (props) => {
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
                        <div className="amountOrderedButton">{props.count}</div>
                    </div>
                    <div className="priceOrdered">{props.sum}$</div>
                </div>
            </div>
            <div className="bigPhoto">
                <img src={bigphoto} alt="" />
            </div>
        </div>
    )
}

export default HeaderOfPage;