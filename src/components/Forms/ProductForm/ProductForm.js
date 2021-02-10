import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import './productForm.css';


const MyTextInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name} className="label"></label>
      <input className="inputField" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="errorMessage">{meta.error}</div>
      ): null}
    </div>
  )
}
const MySelect = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name} className="label"></label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="errorMessage">{meta.error}</div>
      ): null}
    </div>
  )
}

const ProductForm = ({handleSubmit, state, closeForm}) => {
    return (
        <Formik 
          enableReinitialize
          initialValues={state}
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
              setSubmitting(true)
              handleSubmit(values)
              setSubmitting(false)
              setTimeout(() => {
                window.location.reload()
              }, 1000)
          }}
        >
        {({ isSubmitting, dirty, resetForm }) => (
          <Form className="addProductForm">
            <MyTextInput
                label="name"
                name="name" 
                type="text" 
                autoComplete="off"
                placeholder="Product Name" 
            />
            <MyTextInput
                label="price"
                name="price" 
                type="text" 
                className="inputField" 
                autoComplete="off"
                placeholder="Product Price" 
            />
            <MySelect label="origin" name="origin" className="originsField">
              <option value="" className="optionOrigin">Select origin</option>
              <option value="ASIA" className="optionOrigin">ASIA</option>
              <option value="USA" className="optionOrigin">USA</option>
              <option value="EUROPE" className="optionOrigin">EUROPE</option>
              <option value="AFRICA" className="optionOrigin">AFRICA</option>
            </MySelect>
            {state.name !== '' ?
              <div>
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
                  onClick={() => {
                    resetForm({values: state})
                  }}
                >
                  Reset
                </button>
                <button 
                  type="button" 
                  className="cancelChangesButton"
                  onClick={() => {
                    closeForm()
                    resetForm({values: state})
                  }}
                >
                  Cancel
                </button>
              </div> : 
              <div>
                <button 
                  type="submit" 
                  className="submitForm"
                  disabled={isSubmitting || !dirty}
                >
                  Submit
                </button>
              </div>
            }
          </Form>
        )}
        </Formik>
    )
}

export default ProductForm