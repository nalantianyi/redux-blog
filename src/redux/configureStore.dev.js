import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {routerReducer} from 'react-router-redux';

import createFetchMiddleware from 'redux-composable-fetch';
import ThunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import {routerMiddleware} from 'react-router-redux';
import {hashHistory} from 'react-router';

const FetchMiddleware = createFetchMiddleware({
    afterFetch({action, result}) {
        return result.json().then(data => {
            return Promise.resolve({
                action,
                result: data,
            });
        });
    },
});

const finalCreateStore = compose(
    applyMiddleware(ThunkMiddleware, FetchMiddleware, routerMiddleware(hashHistory)),
    window.devToolsExtension ? devToolsExtension() : f => f
)
(createStore);

const reducer = combineReducers({
    ...rootReducer,
    routing: routerReducer,
});

export default function configureStore(initialState) {
    const store = finalCreateStore(reducer, initialState);

    return store;
}
