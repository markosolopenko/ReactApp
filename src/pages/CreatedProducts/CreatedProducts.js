import React, { useEffect } from 'react';
import '../../components/Header/HeaderOfPage';
import HeaderOfPage from '../../components/Header/HeaderOfPage';
import './createdProductsPage.css';
import CreatedElement from '../../components/CreatedProductsCompoents/CreatedElement';
import Filters from '../../components/Filters/filters';
import Pagination from '../../components/Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCreatedProducts } from '../../features/formSlice';


const CreatedProducts = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.formSlice)
    useEffect(() => {
        dispatch(fetchCreatedProducts())
    }, [dispatch])
    return (
        <div className="createdProductsPage">
            <HeaderOfPage />
            <Filters />
            <div className="createdProductsContainer">
                {store.products.map((product, id) => 
                    <div key={id} className="product">
                        <CreatedElement
                            name={product.name}
                            price={product.price} 
                            origin={product.origin}
                            id={product._id}
                        />
                    </div>
                )}
            </div>
            <Pagination />
        </div>
    )
}

export default CreatedProducts;