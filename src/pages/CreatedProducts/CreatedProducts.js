import React, { useEffect, useRef } from 'react';
import '../../components/Header/HeaderOfPage';
import HeaderOfPage from '../../components/Header/HeaderOfPage';
import './createdProductsPage.css';
import CreatedElement from '../../components/CreatedProductsCompoents/CreatedElement';
import Filters from '../../components/Filters/filters';
import Pagination from '../../components/Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCreatedProducts, setId, setProductForEdit } from '../../features/formSlice';
import EditForm from '../../components/Forms/AddOrEditProductForm/EditForm/EditForm';



const CreatedProducts = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.formSlice)
    const form = useRef()
    const openForm = ({id, ...state}) => {
        dispatch(setId({id: id}))
        dispatch(setProductForEdit({product: state}))
        if(form.current.style.display === '') {
            form.current.style.display = 'block'
        }
    }
    useEffect(() => {
        dispatch(fetchCreatedProducts())
    }, [dispatch])
    return (
        <div className="createdProductsPage">
            <HeaderOfPage />
            <EditForm 
                form={form}
            />
            <Filters />
            <div className="createdProductsContainer">
                {store.products.map((product, id) => 
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
            </div>
            <Pagination />
        </div>
    )
}

export default CreatedProducts;