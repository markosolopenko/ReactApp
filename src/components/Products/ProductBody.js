import React from 'react'
// Element of Body 
import ProductElement from './ProductElement'
// Api 
// Local Imports
import './body.css'
import { useSelector } from 'react-redux'


const Products = (props) => {
    const store = useSelector(state => state.productsSlice)

    return (
        <div className="productsContainer">
            {
               store.products.map(element =>  
                    <div key={element.id} className="product"> 
                        <ProductElement
                                product={element} 
                                addToCart={props.addToCart} 
                                addProductToDetails={props.addProductToDetails} 
                        />
                    </div>
                )
            }
        </div>
    )
}

export default Products;
