import React from 'react';
import ProductForm from '../../Forms/ProductForm/ProductForm';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Portal } from '../../../common/components/Portal/Portal';
import { Modal } from '../../../common/components/Modal/Modal';
import './editProductModal.css';

export const EditProductModal = ({open, closeForm}) => {
    const store = useSelector(state => state)
    const {formSlice} = store
    const handleSubmit = (values) => {
        axios.patch(`http://localhost:3000/products/${formSlice.id}`, values)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            }).then(jsonRes =>jsonRes)
    }
    return (
        <Portal className="modal-edit" element="div">
            <Modal className="editModal" open={open}>
                <div className="editForm">
                    <ProductForm 
                        closeForm={closeForm}
                        state={formSlice.productById}
                        handleSubmit={handleSubmit} 
                    />
                </div>
            </Modal>
        </Portal>
    )
}