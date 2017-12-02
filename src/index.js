
import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

import './index.css';
import './css/font-awesome.css';

import { Provider } from "react-redux"
import { Route} from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import store from "./store.js";

import Login from './pages/Login.js';
import './css/bootstrap.min.css'

import Store from './pages/Store.js'
import Cart from './pages/Cart.js'
import Orders from './pages/Orders.js'

const history = createHistory()



ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
            <Route exact path="/ekart" component={Login} />
                <Route path="/ekart/store" component={Store} />
                <Route path="/ekart/cart" component={Cart} />
                <Route path="/ekart/orders" component={Orders} />
               </div>
        </ConnectedRouter>
  </Provider>   ,
  document.getElementById('root')
);
