/**
 * Created by nalantianyi on 2016/12/20.
 */
import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Frame from '../layouts/Frame';
import Home from '../views/Home';
import Detail from '../views/Detail';

const routes = (browserHistory)=>(
    <Router history={browserHistory}>
        <Route path="/" component={Frame}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="/detail/:id" component={Detail}></Route>
        </Route>
    </Router>
);
export default routes;