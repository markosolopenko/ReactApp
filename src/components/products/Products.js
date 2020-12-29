import React, {useEffect, useState} from 'react'
import AddProduct from './AddProduct'
import getProducts from '../../api/getProducts'

const Products = (props) => {
    const [products, setProduct] = useState([])
    let prod = getProducts()
    useEffect(() => {
        prod.then((res) => {
            setProduct(res);
        })
    }, [])
    return (
        <div className="productsContainer">
            {
                products.map(element => 
                        <div key={element.id} className="product"> 
                        <AddProduct product={element} addToCard={props.addToCard} />
                        </div>)
            }
        </div>
    )
}

export default Products;