import React, {useState, useEffect} from 'react'
import AddProduct from './AddProduct'

const Products = () => {
    const [products, setState] =useState([]);
    const url = 'https://yalantis-react-school-api.yalantis.com/api/v1/products';
    useEffect(() => {
        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                setState(result.items)
            })
    }, [])
    return (
        <section>
            <AddProduct products={products} />
        </section>
    )
}

export default Products;