import React from 'react';
import './createdElement.css';
import {ReactComponent as EditSvg} from '../../assets/edit.svg';
import { fetchCreatedProductsById } from '../../features/formSlice';
import { useSelector, useDispatch } from 'react-redux';


const CreatedElement = ({ name, price, origin, form, id }) => {
    const dispatch = useDispatch()

    const openEditForm = () => {
        dispatch(fetchCreatedProductsById(id))
        if(form.style.display === '') {
            form.style.display = 'block'
        }else {
            form.style.display = ''
        }
    }
    return (
        <div className="createdProductElement">
            <div className="createdProductCardInfo">
                <div className="addedProductName">Name: {name}</div>
                <div className="addedProductPrice">Price: {price}$</div>
                <div className="addedProductOrigin">Origin: {origin}</div>
            </div>
            <div className="editCreatedElement" onClick={openEditForm}>
                <button className="editCreatedElementButton">
                    <EditSvg className="editSvg" />
                    <div className="editText">Edit</div>
                </button>
            </div>
        </div>
    )
}

export default CreatedElement;