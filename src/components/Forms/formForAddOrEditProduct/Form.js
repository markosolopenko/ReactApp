import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './addOrEditForm.css';



const FormForAddAndEditProduct = ({initState, handleSubmit, btnC, btnR, form}) => {
    return (
      <div className="form">
        <Formik 
          initialValues={!initState ? {name: '', price: '', origin: ''}: initState}
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
          onSubmit={(values, {setSubmitting, resetForm} )=> {
              setSubmitting(true)
              handleSubmit(values)
              setSubmitting(false);
          }}
        >
        {({ isSubmitting, dirty, resetForm }) => (
          <Form className="addProductForm">
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
            <button 
                type="reset" 
                className="resetFormButton"
                ref={btnR}
                onClick={() => {
                  resetForm({values: initState})
                }}
            >
                RESET
            </button>
            <button 
                ref={btnC}
                type="cancel" 
                className="cancelChangesButton"
                onClick={() => {
                  form.current.style.display = ''
                }}
            >
                CANCEL
            </button>
          </Form>
        )}
        </Formik>
      </div>
    )
}

export default FormForAddAndEditProduct