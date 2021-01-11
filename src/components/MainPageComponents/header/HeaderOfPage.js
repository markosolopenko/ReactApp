import React from 'react'
import { ReactComponent as CartSvg } from '../../../assets/cart.svg'
import './header.css'
import { Link } from 'react-router-dom'


const HeaderOfPage = (props) => {
    return (
        <div className="header">
            <div className="toolbar">
                <div className="logo">
                    <div className="logoText">Yalantis shop</div>
                </div>
                <div className="orderedProduct">
                    <Link to="/products/cartDetails">
                        <div className="cartSvgOrdered">
                            <CartSvg />
                        </div>
                    </Link>
                    <div className="amountOrdered">
                        <div className="amountOrderedButton">{props.count}</div>
                    </div>
                    <div className="priceOrdered">{props.sum}$</div>
                </div>
            </div>
        </div>
    )
}

export default HeaderOfPage;