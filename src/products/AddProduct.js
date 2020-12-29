import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const AddProduct = (props) => {
    const result = props.products.map((product) => {
        return (
            <ul key={product.id}>
                <li>
                    <h3>Name</h3>: {product.name}
                </li>
               <li>
                    <h3>Price</h3>: {product.price}$
               </li>
                <li>
                    <h3>Origin</h3>: {product.origin}
                </li>
                <li>
                    <button className="more__detail">MORE DETAIL</button>
                    <button className="add_to_card">ADD TO CARD</button>
                    <FontAwesomeIcon icon={faCartArrowDown} />
                </li>
            </ul>
            
        )})
    return <div className="products">{result}</div>
}

export default AddProduct;