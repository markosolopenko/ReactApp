import React from 'react'

// Links
import { Link } from 'react-router-dom'

// Styles
import './detailsBody.css'

// Import Icons
import {ReactComponent as Cart} from '../../../assets/cart.svg' 
import {ReactComponent as Plus} from '../../../assets/plus.svg'
import {ReactComponent as Minus} from '../../../assets/minus.svg'
import {ReactComponent as ArrowBack} from '../../../assets/arrowBack.svg'


const DetailBody = (props) => {
    const { product, increment, decrement, count, addToCart, handleChange }  = props
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
                        <div className="minusOne" onClick={decrement}><Minus /></div>
                        <div>
                            <input  onChange={handleChange} className="result" type="text" 
                                    maxLength="3" value={count} />
                        </div>
                        <div className="plusOne" onClick={increment}><Plus /></div>
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