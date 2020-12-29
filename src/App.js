import React, { useState } from 'react';
import Products from './components/products/Products'
import HeaderOfPage from './components/header/HeaderOfPage'

const App = () => {
    const [count, setCount] = useState(0)
    const addToCard = (event) => {
        setCount(count + 1);
    }
    return (
        <div className="container">
            <HeaderOfPage count={count} />
            <Products addToCard={addToCard} />
        </div>
    )
}

export default App;