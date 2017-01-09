/**
 * Created by nalantianyi on 2016/12/20.
 */
import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './redux/configureStore';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {hashHistory} from 'react-router';
import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);


ReactDOM.render((
    <Provider store={store}>
        <div>
            {routes(history)}
        </div>
    </Provider>
), document.getElementById('root'));