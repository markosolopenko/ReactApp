import React from 'react'
import { ReactComponent as CartSvg } from '../../assets/cart.svg'
import './header.css'
import { Link } from 'react-router-dom'
import AddNewProductForm from '../Forms/AddOrEditProductForm/AddNewProductForm/AddNewProductForm';


const HeaderOfPage = (props) => {
    return (
        <div className="header">
            <div className="toolbar">
                <Link to="/products" className="link">
                    <div className="logo">
                        <div className="logoText">Yalantis shop</div>
                    </div>
                </Link>
                <AddNewProductForm />
                <Link to="/products/created" className="link">
                    <div className="createdProductsLinkDiv">
                        <div className="createdProductsLink">Created</div> 
                        <div className="createdProductsLink">Products</div>
                    </div>
                </Link>
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