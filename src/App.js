import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import ProductsDetail from './pages/DetailsPage/ProductsDetail'
import { HandleDetail } from './context/Context'
import CartPage from './pages/CartPage/CartPage'

const App = () => {
    return (
        <HandleDetail>
            <Switch>
                <Route exact path="/products" component={MainPage} />
                <Route exact path="/products/productsDetails" component={ProductsDetail} />
                <Route exact path="/products/cartDetails" component={CartPage} />
                <Route>
                    <Redirect to="/products" />
                </Route>
            </Switch>
        </HandleDetail>
    )
}

export default App;