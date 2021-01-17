import React, {useEffect} from 'react'
// Element of Body 
import ProductElement from './ProductElement'
// Api 
import { fetchProducts } from '../../features/productsSlice';
// Local Imports
import './body.css'
import { useDispatch, useSelector } from 'react-redux'


const Products = (props) => {
    const store = useSelector(state => state.productsSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
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
