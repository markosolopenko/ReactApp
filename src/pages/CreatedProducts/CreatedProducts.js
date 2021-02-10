import React, { Fragment, useEffect, useState } from 'react';
import HeaderOfPage from '../../components/Header/HeaderOfPage';
import './createdProductsPage.css';
import CreatedElement from '../../components/CreatedProducts/CreatedElement';
import Filters from '../../components/Filters/filters';
import Pagination from '../../components/Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCreatedProducts, setId, setProductForEdit } from '../../features/formSlice';
import { EditProductModal } from '../../components/Modals/EditProduct/EditProductModal';


const CreatedProducts = () => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const store = useSelector(state => state)
    const {formSlice} = store
    useEffect(() => {
        dispatch(fetchCreatedProducts())
    }, [dispatch])
    const openForm = (state, id) => {
        dispatch(setId({id: id}))
        dispatch(setProductForEdit({product: state}))
        setIsOpen(true)
    }
    const closeForm = () => {
        setIsOpen(false)
    }
    return (
        <div className="createdProductsPage">
            <HeaderOfPage />
            <EditProductModal open={isOpen} closeForm={closeForm} />
            <Filters />
            <div className="createdProductsContainer">
                {formSlice.products.length > 0 ? 
                    <Fragment>
                    {formSlice.products.map((product, id) => 
                        <div key={id} className="product">
                            <CreatedElement
                                name={product.name}
                                price={product.price} 
                                origin={product.origin}
                                id={product._id}
                                openForm={openForm}
                            />
                        </div>
                    )}
                    </Fragment>
                : <h1>No Porduct Created</h1>}
            </div>
            <Pagination />
        </div>
    )
}

export default CreatedProducts;