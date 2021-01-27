import React from 'react';
import './editForm.css';
import FormForAddAndEditProduct from '../formForAddOrEditProduct/Form';



const EditForm = () => {
    return (
        <div className="editForm">
            <FormForAddAndEditProduct />
            <button 
                type="reset" 
                className="resetFormButton"
            >
                RESET
            </button>
            <button 
                type="cancel" 
                className="cancelChangesButton"
            >
                CANCEL
            </button>
        </div>
    )
}

export default EditForm;