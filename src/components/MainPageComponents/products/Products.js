import React, {useEffect, useState} from 'react'
import AddProduct from './AddProduct'
import getProducts from '../../../api/getProducts'
import '../../../styles/MainPage/body.css'

const Products = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts().then((res) => {
            setProducts(res);
        })
    }, [])
    return (
        <div className="productsContainer">
            {
                products.map(element =>  
                    <div key={element.id} className="product"> 
                    <AddProduct product={element} 
                                addToCard={props.addToCard} 
                                goToDetailPage={props.goToDetailPage}
                                handleLinkClick={props.handleLinkClick} 
                    />
                    </div>
                )
            }
        </div>
    )
}

export default Products;