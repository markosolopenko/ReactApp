import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'


// Local imports
import MainPage from './pages/MainPage/MainPage'
import ProductsDetail from './pages/DetailPage/ProductsDetail'
import CartPage from './pages/CartPage/CartPage'
import CreatedProducts from './pages/CreatedProducts/CreatedProducts';
import OrederedsProducts from './pages/OrderedProductsPage/OrderedProducts';

const App = () => {
    return (
        <Switch>
            <Route exact path="/products" component={MainPage} />
            <Route exact path="/products/productsDetails" component={ProductsDetail} />
            <Route exact path="/products/cartDetails" component={CartPage} />
            <Route exact path="/products/created" component={CreatedProducts} />
            <Route exact path="/products/ordereds" component={OrederedsProducts} />
            <Route>
                <Redirect to="/products" />
            </Route>
        </Switch>
    )
}

export default App;