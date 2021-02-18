import React from 'react';
import ProductForm from '../../Forms/ProductForm/ProductForm';
import axios from 'axios';
import { Portal } from '../../../common/components/Portal/Portal';
import { Modal } from '../../../common/components/Modal/Modal';
import './createProductModal.css';

export const CreateProductModal= ({open}) => {
  const handleSubmit = (values) => {
    const newProduct = {
      name: values.name,
      price: values.price,
      origin: values.origin
    }
    axios.post('http://localhost:3001/products/create', newProduct)
  } 
  return (
    <Portal className="modal-create" element="div">
      <Modal className="createProductModal" open={open}>
          <ProductForm 
            handleSubmit={handleSubmit} 
            state={{name: '', price: '', origin: ''}}
          />
      </Modal>
    </Portal>
  )
}

