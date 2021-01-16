import React, { useState } from 'react'

// Redux 
import { useDispatch } from 'react-redux'
import {subtractProductFromCart, 
        countGenerallyAddedProducts,
        subtractFromAddedProducts,
        addProductsToCartPage,
        takesDataFromInput,
                              } from '../../../features/productsSlice'

// icons imports 
import {ReactComponent as Plus} from '../../../assets/plus.svg'
import {ReactComponent as Minus} from '../../../assets/minus.svg'
import {ReactComponent as Trash} from '../../../assets/trash.svg'



const CartBodyElement = (props) => {
    // Props
    const { product, deleteProduct, cartPageProducts } = props
    // Redux
    const dispatch = useDispatch()

    let count = 0;
    // Count how many current product have been added  
    cartPageProducts.forEach(productObj => {
        if(productObj === product) {
            count += 1
        }
    }) 
    let [counter, setCounter] = useState(count)
    let sum = product.price * counter

    // methods for adding and subtract the elements and also count them
    const increase = () => {
        if (counter >= 0) {
            setCounter(counter + 1)
            dispatch(countGenerallyAddedProducts({count: 1, price: product.price}))
            dispatch(addProductsToCartPage({array: [product]}))
        } 
    }
    
    const decrease = () => {
        if (counter >= 1) {
            setCounter(counter - 1)
            dispatch(subtractProductFromCart({index: cartPageProducts.indexOf(product)}))
            dispatch(subtractFromAddedProducts({count: 1, price: product.price}))
        }
    }

    const addDataWhileChanging = (value) => { 
        if(value >= 0) {
            const array = [];
            for (let i = 0; i < value; i++) {
                array.push(product)
            }
            setCounter(value) 
            dispatch(takesDataFromInput({count: value, price: (value * product.price)}))
            dispatch(subtractFromAddedProducts({count: counter, price: product.price * counter}))
        }
    }
    // handle changes in input 
    const handleChange = (e) => {
        addDataWhileChanging(Number(e.target.value))
    } 

    // return the product itself
    return (
        <div className="elementCartBody">
            <div className="cbName"><div className="cpName">NAME</div>: {product.name}</div>
            <div className="plus__minus">
                <div className="minusOne" onClick={decrease}><Minus /></div>
                <div>
                    <input className="result" value={counter} onChange={handleChange} />
                </div> 
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