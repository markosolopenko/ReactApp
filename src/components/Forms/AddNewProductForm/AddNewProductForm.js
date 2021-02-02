import React, {useRef} from 'react';
import {ReactComponent as OpenFormSVG} from '../../../assets/openForm.svg';
import FormForAddAndEditProduct from '../formForAddOrEditProduct/Form';
import axios from 'axios';
import './addNewProductForm.css';
// import { useDispatch, useSelector } from 'react-redux';


const AddNewProductForm = () => {
  const form = useRef()


  const openForm = () => {
    if(form.current.style.display === '') {
      form.current.style.display = 'block'
    }else {
       form.current.style.display = ''
    }
  }
  const handleSubmit = (values) => {
    setTimeout(() => {
      const newProduct = {
        name: values.name,
        price: values.price,
        origin: values.origin
      }
      axios.post('http://localhost:3001/products/create', newProduct)
    }, 400)
    window.location.reload()
  } 
  return (
    <div className="addNewProductForm">
      <div className="buttonShowForm" onClick={openForm}>
        <button className="showForm">
            <div className="openFormButtonText">CREATE NEW PRODUCT</div>
            <OpenFormSVG className="openFormSvg" />
        </button>
      </div>
      <div className="formToAddNewProduct" ref={form}>
        <FormForAddAndEditProduct 
          handleSubmit={handleSubmit} 
          initState={{name: '', price: '', origin: ''}} 
        />
      </div>
    </div>
  )
}

export default AddNewProductForm