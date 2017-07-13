'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App';
import Home from './components/Home';
import {Provider} from 'react-redux';
import store from './reduxExample';

    ReactDOM.render(

            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/" component={App}/>
                    <Route path="/home" component={Home}/>
                </Router>
            </Provider>
        , document.getElementById('app')
    );




