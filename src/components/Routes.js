import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductList from './ProductList';
import ChangeProducts from './ChangeProducts';
import Home from './Home';
import Cart from './Cart';
import ItemDetail from './ItemDetail';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/products'>
                <ProductList/>
            </Route>
            <Route exact path='/change_products'>
                <ChangeProducts/>
            </Route>
            <Route exact path='/cart'>
                <Cart/>
            </Route>
            <Route exact path='/item/:id'>
                <ItemDetail/>
            </Route>
            
            <Redirect to='/' />
        </Switch>
    )
}

export default Routes;