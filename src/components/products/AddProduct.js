import React from 'react'
import { ReactComponent as CartSvg}  from '../../icons/cart.svg'


const AddProduct = ({product, addToCard}) => {
    return (
        <div className="productCard">
            <div className="itemInfo">
                <div className="name">Name: {product.name}</div>
                <div className="price">Price: {product.price.toFixed(2)}$</div>
                <div className="origin">Origin: {product.origin}</div>
            </div>
            <div className="cardButtons">            
                <button className="moreDetail">MORE DETAIL</button>
                <button className="addToCard" onClick={addToCard}>
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