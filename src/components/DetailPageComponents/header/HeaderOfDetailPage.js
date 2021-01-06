import React from 'react'
import { ReactComponent as CartSvg } from '../../../icons/cart.svg'
import '../../../styles/DetailPage/detailsHeader.css'


const HeaderOfDetailPage = (props) => {
    return (
        <div className="detailHeader">
            <div className="detailToolbar">
                <div className="detailLogo">
                    <div className="detailLogoText">Yalantis shop</div>
                </div>
                <div className="detailOrderedProduct">
                    <div className="detailCartSvgOrdered">
                        <CartSvg />
                    </div>
                    <div className="detailAmountOrdered">
                        <div className="detailAmountOrderedButton">{props.count}</div>
                    </div>
                    <div className="detailPriceOrdered">{props.sum}$</div>
                </div>
            </div>
        </div>
    )
}

export default HeaderOfDetailPage;