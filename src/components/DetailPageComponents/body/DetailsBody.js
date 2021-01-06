import React from 'react'

// Links
import { Link } from 'react-router-dom'

// Styles
import '../../../styles/DetailPage/detailsBody.css'

// Import Icons
import {ReactComponent as Cart} from '../../../icons/cart.svg' 
import {ReactComponent as Plus} from '../../../icons/plus.svg'
import {ReactComponent as Minus} from '../../../icons/minus.svg'
import {ReactComponent as ArrowBack} from '../../../icons/arrowBack.svg'


const DetailBody = (props) => {
    const { product, increment, decrement, count, addToCart }  = props
    return (
        <div className="detailsBody">
            <div className="arrowBackDiv">
                <Link to="/products" className="link">
                    <ArrowBack className="arrowBack" />
                    <div className="backText">Get Back</div>
                </Link>
            </div>
            <div className="forMarg">
                <div className="details__Name__Price">
                    <div className="detailsName">NAME: <span>{product.name}</span></div>
                    <div className="detailsPrice">PRICE: <span>${product.price}</span></div>
                </div>
                <div className="infoBlock">
                    <div>
                        <div className="detailOrigin">ORIGIN: <span>{product.origin.toUpperCase()}</span></div>
                        <div className="detailOrigin">CREATE: <span>{product.createdAt}</span></div>
                    </div>
                    <div className="plus__minus">
                        <div className="minusOne" onClick={() => decrement(product.price)}><Minus /></div>
                        <div className="result">{count}</div>
                        <div className="plusOne" onClick={() => increment(product.price)}><Plus /></div>
                    </div>
                    <div className="detailAddToCart" onClick={addToCart} >
                        <div>ADD TO CART</div>
                        <Cart className="detailCart" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DetailBody