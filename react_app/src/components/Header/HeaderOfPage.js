import React, { useState } from 'react'
import { ReactComponent as CartSvg } from '../../assets/cart.svg'
import './header.css'
import {ReactComponent as OpenFormSVG} from '../../assets/openForm.svg';
import { Link } from 'react-router-dom'
import { setNickname } from '../../features/formSlice';
import { useDispatch } from 'react-redux';
import { CreateProductModal } from '../Modals/CreateProduct/CreateProductModal';


const HeaderOfPage = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const handleLinkingToOrderPage = () => {
        dispatch(setNickname({nickname: 'Timo'}))
    }
    return (
        <div className="header">
            <div className="toolbar">
                <Link to="/products" className="link">
                    <div className="logo">
                        <div className="logoText">Yalantis shop</div>
                    </div>
                </Link>
                <div className="buttonShowForm" onClick={() => setIsOpen(!isOpen)}>
                    <button className="showForm">
                        <div className="openFormButtonText">CREATE NEW PRODUCT</div>
                        <OpenFormSVG className="openFormSvg" />
                    </button>
                 </div>
                <CreateProductModal open={isOpen} />
                <div className="linksInToolbar">
                    <Link to="/products/ordereds" className="link"
                        onClick={handleLinkingToOrderPage}
                    >
                        <div className="linkDivOrder">
                            <div className="linkText">Order</div>
                            <div className="linkText">History</div>
                        </div>
                    </Link>
                    <Link to="/products/created" className="link">
                        <div className="linkDivCreate">
                            <div className="linkText">Created</div> 
                            <div className="linkText">Products</div>
                        </div>
                    </Link>
                    <div className="cartinToolBar">
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
        </div>
    )
}

export default HeaderOfPage;