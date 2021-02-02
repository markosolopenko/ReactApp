import React from 'react';
import './editForm.css';
import FormForAddAndEditProduct from '../formForAddOrEditProduct/Form';
import axios from 'axios';


const EditForm = ({state, form, btnR, btnC, id}) => {
    const handleSubmit = (values) => {
        axios.patch(`http://localhost:3000/products/${id}`,values)
            .then(res => {
                if(res.ok) {
                    return res.json()
                }
            }).then(jsonRes => jsonRes)
            window.location.reload()
    }
    return (
        <div className="editForm" ref={form}>
            <FormForAddAndEditProduct
                initState={state}
                btnC={btnC}
                btnR={btnR}
                form={form}
                handleSubmit={handleSubmit} 
            />
        </div>
    )
}

export default EditForm;