import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductList from './ProductList';
import AddForm from './AddForm';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/products'>
                <ProductList/>
            </Route>
            <Route exact path='/add_products'>
                <AddForm/>
            </Route>
            <Redirect to='/' />
        </Switch>
    )
}

export default Routes;