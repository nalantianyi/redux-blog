/**
 * Created by nalantianyi on 2016/12/20.
 */
import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Home from '../views/Home';
import Detail from '../views/Detail';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="/detail/:id" component={Detail}></Route>
    </Router>
);
export default routes;