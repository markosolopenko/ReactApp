import React, {useEffect, useState} from 'react'
import AddProduct from './AddProduct'


const Products = () => {
    const [products, setState] = useState([]);
    const url = 'https://yalantis-react-school-api.yalantis.com/api/v1/products';
    useEffect(() => {
        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                setState(result.items)
            })
    }, [])
    return (
        <div className="productsContainer">
            {
                products.map(element => 
                    <div key={element.id} className="product"> 
                    <AddProduct product={element} />
                    </div>)
            }
        </div>
    )
}

export default Products;