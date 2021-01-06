import React, {useContext} from 'react';
import Products from '../components/MainPageComponents/products/Products'
import HeaderOfPage from '../components/MainPageComponents/header/HeaderOfPage'
import {Context} from '../context/detailHandler'

const MainPage = () => {
    const values = useContext(Context)   
    const handleLinkClick = (product) => {
        values.setProduct(product)
    }

    const addToCard = (value) => {
        values.setCount(values.count + 1);
        values.setSum(values.sum + Number(value))
    }
    return (
       <div className="container">
            <HeaderOfPage 
                count={values.count} 
                sum={values.sum} 
            />
            <Products 
                addToCard={addToCard}  
                handleLinkClick={handleLinkClick}
            />
        </div>
    )
}

export default MainPage;