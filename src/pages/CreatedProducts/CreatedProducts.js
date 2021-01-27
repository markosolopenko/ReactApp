import React, { useEffect } from 'react';
import '../../components/Header/HeaderOfPage';
import HeaderOfPage from '../../components/Header/HeaderOfPage';
import './createdProductsPage.css';
import CreatedElement from '../../components/CreatedProductsCompoents/CreatedElement';
import Filters from '../../components/Filters/filters';
import Pagination from '../../components/Pagination/Pagination';
import EditForm from '../../components/Forms/EditForm/EditForm';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCreatedProducts } from '../../features/formSlice';


const CreatedProducts = () => {
    const formEdit = document.querySelector('.editForm');
    const dispatch = useDispatch()
    const store = useSelector(state => state.formSlice)

    useEffect(() => {
        dispatch(fetchCreatedProducts())
    }, [dispatch])
    return (
        <div className="createdProductsPage">
            <HeaderOfPage />
            <EditForm />
            <Filters />
            <div className="createdProductsContainer">
                {store.products.map((product, id) => 
                    <div key={id} className="product">
                        <CreatedElement
                            form={formEdit}
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