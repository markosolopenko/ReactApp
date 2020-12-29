import React from 'react';
import Products from './components/products/Products'
import HeaderOfPage from './components/header/HeaderOfPage'

const App = () => {
    return (
        <div className="container">
            <HeaderOfPage />
            <Products />
        </div>
    )
}

export default App;