import React, { useContext, useState } from 'react'
import { ACTIONS, Context } from '../../../context/Context'

// icons imports 
import {ReactComponent as Plus} from '../../../icons/plus.svg'
import {ReactComponent as Minus} from '../../../icons/minus.svg'
import {ReactComponent as Trash} from '../../../icons/trash.svg'

const CartBodyElement = (props) => {
    const value = useContext(Context)
    const { product, deleteProduct } = props
    let count = 0;
    value.state.ifExist.forEach(productObj => {
        if(productObj === product) {
            count += 1
        }
    })
    let [counter, setCounter] = useState(count)
    let sum = product.price * counter;
    const increase = () => {
        if (counter >= 0) {
            setCounter(counter + 1)
            value.dispatch({ type: ACTIONS.ADD_TO_CART, payload: {value: product.price} })
        } 
    }
    
    const decrease = () => {
        if (counter >= 1) {
            setCounter(counter - 1)
            value.dispatch({ type: ACTIONS.DELETE_FROM_CART, payload: {value: product.price} })
        }
    }
    return (
        <div className="elementCartBody">
            <div className="cbName"><div className="cpName">NAME</div>: {product.name}</div>
            <div className="plus__minus">
                <div className="minusOne" onClick={decrease}><Minus /></div>
                <div className="result">{counter}</div> 
                <div className="plusOne" onClick={increase}><Plus /></div>
            </div>
            <div className="arifmetix">
                {product.price}$ x {counter} = {sum}$
            </div>
            <div className="btnDelete">
                <button onClick={() =>  deleteProduct(product.id)}>
                    <Trash className="trash" />
                </button>
            </div>
        </div>
    )
}

export default CartBodyElement