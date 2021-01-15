import React, { useState } from 'react'

// Redux 
import { useDispatch, useSelector } from 'react-redux'
import { mainPageSlice } from '../../../features/mainPageSlice'

// icons imports 
import {ReactComponent as Plus} from '../../../assets/plus.svg'
import {ReactComponent as Minus} from '../../../assets/minus.svg'
import {ReactComponent as Trash} from '../../../assets/trash.svg'


const CartBodyElement = (props) => {
    const store = useSelector(state => state)
    const dispatch = useDispatch()
    const { product, deleteProduct } = props
    let count = 0;
    store.mainPageSlice.cartPageProducts.forEach(productObj => {
        if(productObj === product) {
            count += 1
        }
    })
    let [counter, setCounter] = useState(count)
    let sum = product.price * counter;
    const increase = () => {
        if (counter >= 0) {
            setCounter(counter + 1)
            dispatch()
        } 
    }
    
    const decrease = () => {
        if (counter >= 1) {
            setCounter(counter - 1)
            dispatch()
        }
    }
    return (
        <div className="elementCartBody">
            <div className="cbName"><div className="cpName">NAME</div>: {product.name}</div>
            <div className="plus__minus">
                <div className="minusOne"><Minus /></div>
                <div className="result">{counter}</div> 
                <div className="plusOne" onClick={increase}><Plus /></div>
            </div>
            <div className="arifmetix">
                {product.price}$ x {counter} = {sum}$
            </div>
            <div className="btnDelete">
                <button onClick={() => deleteProduct(product.id, counter, sum)}>
                    <Trash className="trash" />
                </button>
            </div>
        </div>
    )
}

export default CartBodyElement