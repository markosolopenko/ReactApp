import React, { useEffect, useState } from 'react';
import '../../components/Header/HeaderOfPage';
import HeaderOfPage from '../../components/Header/HeaderOfPage';
import './createdProductsPage.css';
import CreatedElement from '../../components/CreatedProductsCompoents/CreatedElement';
import Filters from '../../components/Filters/filters';
import Pagination from '../../components/Pagination/Pagination';

const CreatedProducts = () => {
    const [products, setProducts] = useState([{
        name: '',
        price: '',
        origin: ''
    }])
    useEffect(() => {
        fetch('/products/createdProducts').then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setProducts(jsonRes));
    })
    return (
        <div className="createdProductsPage">
            <HeaderOfPage />
            <Filters />
            <div className="createdProductsContainer">
                {products.map((product, id) => 
                    <div key={id} className="product">
                        <CreatedElement 
                                name={product.name}
                                price={product.price} 
                                origin={product.origin}
                        />
                    </div>
                )}
            </div>
            <Pagination />
        </div>
    )
}

export default CreatedProducts;