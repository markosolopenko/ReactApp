import React, {useEffect, useState} from 'react'
// Element of Body 
import ProductElement from './ProductElement'
// Api 
import getProducts from '../../api/getProducts'
// Local Imports
import './body.css'
import bigphoto from '../../assets/bigphoto.jpg'


const Products = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts().then((res) => {
            setProducts(res);
        })
    }, [])
    return (
        <div className="productsContainer">
            <div className="bigPhoto">
                <img src={bigphoto} alt="" />
            </div>
            {
                products.map(element =>  
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
