import React, { useContext } from 'react'
import { ACTIONS, Context } from '../../../context/Context'

// icons imports 
import {ReactComponent as Plus} from '../../../icons/plus.svg'
import {ReactComponent as Minus} from '../../../icons/minus.svg'
import {ReactComponent as Trash} from '../../../icons/trash.svg'

const CartBodyElement = (props) => {
    const { product, deleteProduct } = props
    const value = useContext(Context)
    return (
        <div className="elementCartBody">
            <div className="cbName"><div className="cpName">NAME</div>: {product.name}</div>
            <div className="plus__minus">
                <div className="minusOne" onClick={() => {
                    value.dispatch({ type: ACTIONS.DECREMENT })
                }}><Minus /></div>
                <div className="result">{value.state.detailsCount}</div>
                <div className="plusOne" onClick={() => {
                    value.dispatch({ type: ACTIONS.INCREMENT })
                }}><Plus /></div>
            </div>
            <div className="arifmetix">
                {product.price}$ x {value.state.detailsCount} = {product.price * value.state.detailsCount}
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