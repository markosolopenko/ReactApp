import React from 'react'
import { ReactComponent as CartSvg}  from '../../icons/cart.svg'

const AddProduct = ({product}) => {
    return (
        <div className="productCard">
            <div className="itemInfo">
                <div className="name">Name: {product.name}</div>
                <div className="price">Price: {product.price}$</div>
                <div className="origin">Origin: {product.origin}</div>
            </div>
            <div className="cardButtons">            
                <button className="moreDetail">MORE DETAIL</button>
                <button className="addToCard">
                    <div className="addToCardText">ADD TO CART</div>
                    <div className="cartSvg">
                        <CartSvg />
                    </div>
                </button>
            </div>
        </div>
        )

}

export default AddProduct;