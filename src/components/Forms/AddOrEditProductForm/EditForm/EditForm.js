import React from 'react';
import './editForm.css';
import FormForAddOrEditProduct from '../FormForAddOrEditProduct';
import axios from 'axios';
import { useSelector } from 'react-redux';



const EditForm = ({form}) => {
    const store = useSelector(state => state.formSlice)
    const handleSubmit = (values) => {
        axios.patch(`http://localhost:3000/products/${store.id}`, values)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            }).then(jsonRes =>jsonRes)
    }
    return (
        <div className="editForm" ref={form}>
            <FormForAddOrEditProduct 
                form={form}
                state={store.productById}
                handleSubmit={handleSubmit} 
            />
        </div>
    )
}

export default EditForm;