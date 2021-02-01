import React, {useRef} from 'react';
import './createdElement.css';
import {ReactComponent as EditSvg} from '../../assets/edit.svg';
import EditForm from '../Forms/EditForm/EditForm';


const CreatedElement = ({ name, price, origin, id }) => {
    const form = useRef()
    const buttonReset = useRef()
    const buttonCancel = useRef()
    const openForm = () => {
        if(form.current.style.display === '') {
            form.current.style.display = 'block'
            buttonCancel.current.style.display = 'block'
            buttonReset.current.style.display = 'block'
        }
    }
    return (
        <div className="createdProductElement">
            <div className="createdProductCardInfo">
                <div className="addedProductName">Name: {name}</div>
                <div className="addedProductPrice">Price: {price}$</div>
                <div className="addedProductOrigin">Origin: {origin}</div>
            </div>
            <div className="editCreatedElement" onClick={openForm}>
                <button className="editCreatedElementButton">
                    <EditSvg className="editSvg" />
                    <div className="editText">Edit</div>
                </button>
            </div>
            <EditForm 
                state={{name, price, origin}} 
                form={form}
                btnR={buttonReset}
                btnC={buttonCancel}
            />
        </div>
    )
}

export default CreatedElement;