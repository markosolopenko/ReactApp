import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProductsDetail from './pages/ProductsDetail'
import { HandleDetail } from './context/detailHandler'

const App = () => {
    return (
        <HandleDetail>
            <Switch>
                <Route exact path="/products" component={MainPage} />
                <Route exact path="/products/:id" component={ProductsDetail} />
                <Route>
                    <Redirect to="/products" />
                </Route>
            </Switch>
        </HandleDetail>
    )
}

export default App;