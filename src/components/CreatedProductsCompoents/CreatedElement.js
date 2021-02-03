import React from 'react';
import './createdElement.css';
import {ReactComponent as EditSvg} from '../../assets/edit.svg';


const CreatedElement = ({ name, price, origin, openForm, id }) => {
    const product = {name, price, origin}
    return (
        <div className="createdProductElement">
            <div className="createdProductCardInfo">
                <div className="addedProductName">Name: {name}</div>
                <div className="addedProductPrice">Price: {price}$</div>
                <div className="addedProductOrigin">Origin: {origin}</div>
            </div>
            <div className="editCreatedElement" 
                 onClick={() => openForm(product, id)}
            >
                <button className="editCreatedElementButton">
                    <EditSvg className="editSvg" />
                    <div className="editText">Edit</div>
                </button>
            </div>
        </div>
    )
}

export default CreatedElement;