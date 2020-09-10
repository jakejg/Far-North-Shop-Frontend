import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductList from './ProductList';
import ChangeProducts from './ChangeProducts';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/products'>
                <ProductList/>
            </Route>
            <Route exact path='/change_products'>
                <ChangeProducts/>
            </Route>
            <Redirect to='/' />
        </Switch>
    )
}

export default Routes;