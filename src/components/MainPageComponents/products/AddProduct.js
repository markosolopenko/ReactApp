import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CartSvg}  from '../../../icons/cart.svg'


const AddProduct = ({product, addToCard, handleLinkClick}) => {
    return (
        <div className="productCard">
            <div className="itemInfo">
                <div className="name">Name: {product.name}</div>
                <div className="price">Price: {product.price.toFixed(2)}$</div>
                <div className="origin">Origin: {product.origin.toUpperCase()}</div>
            </div>
            <div className="cardButtons">            
                <Link to="/products/:id">
                    <button className="moreDetail" 
                            onClick={() => handleLinkClick(product)}
                        >DETAIL PAGE</button>
                </Link>
                <button className="addToCard" onClick={() => addToCard(product.price)}>
                    <div className="addToCardText">ADD TO CART</div>
                    <div className="cartSvg">
                        <CartSvg id="svg" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default AddProduct;