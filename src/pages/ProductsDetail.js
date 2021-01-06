import React, { useContext } from 'react'
import HeaderOfDetailPage from '../components/DetailPageComponents/header/HeaderOfDetailPage'
import {Context} from '../context/detailHandler'
import DetailsBody from '../components/DetailPageComponents/body/DetailsBody'


const ProductsDetail = () => {
    const value = useContext(Context)
    const increment = (price) => {
        value.setDetailsCount(value.detailsCount + 1)
        if (value.detailsCount >= 0) {
            value.setSumOfAdded(value.sumOfAdded + price)
        }
        
    }
    const decrement = (price) => {
        value.setDetailsCount(value.detailsCount - 1)
        if (value.detailsCount >= 1) {
            value.setSumOfAdded(value.sumOfAdded - price)
        }
        
    }
    const handeDetailAddToCart = () => {
        value.setSum(value.sumOfAdded + value.sum)
        value.setCount(value.count + value.detailsCount)
    }

    return (
        <div className="detailsContainer">
            <HeaderOfDetailPage count={value.count} sum={value.sum} />
            <DetailsBody 
                    product={value.product} 
                    increment={increment} 
                    decrement={decrement}
                    count={value.detailsCount}
                    addToCart={handeDetailAddToCart}
            />
        </div>
    )
}

export default ProductsDetail;