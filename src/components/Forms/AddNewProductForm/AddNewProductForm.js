import React, {useRef} from 'react';
import {ReactComponent as OpenFormSVG} from '../../../assets/openForm.svg';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './addProductForm.css';
import axios from 'axios';

const AddNewProductForm = () => {
  const form = useRef()
  const openForm = () => {
    if(form.current.style.display === '') {
      form.current.style.display = 'block'
    }else {
       form.current.style.display = ''
    }
  }
  return (
    <div className="addNewProductForm">
      <div className="buttonShowForm" onClick={openForm}>
        <button className="showForm">
            <div className="openFormButtonText">CREATE NEW PRODUCT</div>
            <OpenFormSVG className="openFormSvg" />
        </button>
      </div>
      <div className="formToAddNewProduct">
        <Formik 
          initialValues={{name: '', price: '', origin: ''}}
          validationSchema={Yup.object({
            name: Yup.string()
            .min(3, 'Required Min 3 symbols!!!')
            .max(20, 'Max available 20 symbols!!!')
            .required('Required!!!'),
            price: Yup.number()
              .typeError('Type error. Must be a number!!!')
              .min(0, 'Negaive numbers doesn\'t allowed!!!')
              .required('Reqiured!!!'),
            origin: Yup.string()
              .oneOf(['ASIA', 'USA', 'EUROPE', 'AFRICA'], "Invalid Origin")
              .required('Required!!!')
          })}
          onSubmit={(values, {setSubmitting} )=> {
              const newProduct = {
                name: values.name,
                price: values.price,
                origin: values.origin
              }
              axios.post('http://localhost:3001/products/create', newProduct)
              window.location.reload()
          }}
        >
        {({ isSubmitting, dirty }) => (
          <Form className="addProductForm" ref={form}>
            <label htmlFor="name" className="label"></label>
            <Field 
                name="name" 
                type="text" 
                className="inputField"
                autoComplete="off"
                placeholder="Product Name" 
            />
            <ErrorMessage name="name">
              {msg => <div className="errorMessage">{msg}</div>}
            </ErrorMessage>
            <label htmlFor="price" className="label"></label>
            <Field 
                name="price" 
                type="text" 
                className="inputField" 
                autoComplete="off"
                placeholder="Product Price" 
            />
            <ErrorMessage name="price" >
              {msg => <div className="errorMessage">{msg}</div>}
            </ErrorMessage>
            <label htmlFor="origin" className="label"></label>
            <Field name="origin" as="select" className="originsField">
              <option value="" className="optionOrigin">Select origin</option>
              <option value="ASIA" className="optionOrigin">ASIA</option>
              <option value="USA" className="optionOrigin">USA</option>
              <option value="EUROPE" className="optionOrigin">EUROPE</option>
              <option value="AFRICA" className="optionOrigin">AFRICA</option>
            </Field>
            <ErrorMessage name="origin">
              {msg => <div className="errorMessage">{msg}</div>}
            </ErrorMessage>
            <button 
              type="submit" 
              className="submitForm"
              disabled={isSubmitting || !dirty}
            >
              Submit
            </button>
          </Form>
        )}
        </Formik>
      </div>
    </div>
  )
}

export default AddNewProductForm