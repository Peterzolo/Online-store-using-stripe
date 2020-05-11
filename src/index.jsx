import React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CartContextProvider from './components/cart/context'

import productPage from './pages/product-page/productPage'
import viewCart from './pages/cart-view/viewCart'

import './mainStyle.css'


ReactDom.render(
   
    <BrowserRouter>
        
        <CartContextProvider>
            <Switch>
               
               <Route exact path="/" component={productPage} />
                <Route exact path="/viewcart" component={viewCart} />
                
            </Switch>
        
        </CartContextProvider>
    </BrowserRouter>
    
  , document.getElementById('root'));