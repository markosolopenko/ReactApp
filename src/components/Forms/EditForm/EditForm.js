import React from 'react';
import './editForm.css';
import FormForAddAndEditProduct from '../formForAddOrEditProduct/Form';


const EditForm = ({state, form, btnR, btnC}) => {
    return (
        <div className="editForm" ref={form}>
            <FormForAddAndEditProduct
                initState={state}
                btnC={btnC}
                btnR={btnR}
                form={form}
                // handleSubmit={} 
            />
        </div>
    )
}

export default EditForm;