import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CartSvg}  from '../../../assets/cart.svg'
import 

const AddProduct = ({product, addToCart, addProductToDetails}) => {
    return (
        <div className="productCard">
            <div className="itemInfo">
                <div className="name">Name: {product.name}</div>
                <div className="price">Price: {product.price.toFixed(2)}$</div>
                <div className="origin">Origin: {product.origin.toUpperCase()}</div>
            </div>
            <div className="cardButtons">            
                <Link to="/products/productsDetails">
                    <button className="moreDetail" 
                            onClick={() => addProductToDetails(product)}
                        >DETAIL PAGE</button>
                </Link>
                <button className="addToCard" onClick={() => addToCart(product.price, product)}>
                    <div className="addToCardText" >ADD TO CART</div>
                    <div className="cartSvg">
                        <CartSvg id="svg" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default AddProduct;
