import React, { useState } from 'react'

// Redux 
import { useDispatch, useSelector } from 'react-redux'
import {subtractProductFromCart, 
        countGenerallyAddedProducts,
        subtractFromAddedProducts,
        addProductsToCartPage,
        takesDataFromInput,
        setPriceOfSpecificProducts
} from '../../features/productsSlice'

// icons imports 
import {ReactComponent as Plus} from '../../assets/plus.svg'
import {ReactComponent as Minus} from '../../assets/minus.svg'
import {ReactComponent as Trash} from '../../assets/trash.svg'
import { useEffect } from 'react'



const CartBodyElement = (props) => {
    const [counter, setCounter] = useState(0)
    // Props
    const { product, deleteProduct } = props
    // Redux
    const dispatch = useDispatch()
    const store = useSelector(state => state.productsSlice)
    let count = 0
    // Count how many current product have been added  
    store.cartPageProducts.forEach(productObj => {
        if(productObj === product) {
            count += 1
        }
    }) 
    useEffect(() => {
        setCounter(count)
    }, [count])
    const addDataWhileChanging = (value) => { 
        if(value >= 0) {
            setCounter(value) 
            dispatch(takesDataFromInput({count: value, price: value * product.price}))
            dispatch(subtractFromAddedProducts({count: counter, price: product.price * counter}))
        }
    }
    const handleChange = (e) => {
        addDataWhileChanging(Number(e.target.value))
    }


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
            dispatch(subtractProductFromCart({index: store.cartPageProducts.indexOf(product)}))
            dispatch(subtractFromAddedProducts({count: 1, price: product.price}))
        }
    }

    return (
        <div className="elementCartBody">
            <div className="cbName"><div className="cpName">NAME</div>: {product.name}</div>
            <div className="plus__minus">
                <div className="minusOne" onClick={decrease}><Minus /></div>
                <div className="resultDiv">
                    <input 
                        className="result"
                        type="text"
                        value={counter}
                        onChange={handleChange}         
                    />
                </div> 
                    
                <div className="plusOne" onClick={increase}><Plus /></div>
            </div>
            <div className="arifmetix">
                {product.price}$ x {counter} = {product.price * counter}$
            </div>
            <div className="btnDelete">
                <button onClick={() => deleteProduct(
                    product.id, counter, counter*product.price 
                )}>
                    <Trash className="trash" />
                </button>
            </div>
        </div> 
    )
}

export default CartBodyElement