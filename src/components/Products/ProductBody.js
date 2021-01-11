import React, {useEffect, useState} from 'react'
import AddProduct from './ProductElement'
import getProducts from '../../api/getProducts'
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
                        <AddProduct product={element} 
                                addToCart={props.addToCart} 
                                goToDetailPage={props.goToDetailPage}
                                addProductToDetails={props.addProductToDetails} 
                        />
                    </div>
                )
            }
        </div>
    )
}

export default Products;
