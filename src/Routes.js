import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductList from './ProductList';

const Routes = () => {
    return (
        <Switch>
            <Route to='/products'>
                <ProductList/>
            </Route>
        </Switch>
    )
}

export default Routes;