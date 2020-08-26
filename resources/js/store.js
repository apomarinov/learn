import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducers from "./reducers";
import {watchFetchCollections} from './sagas/collections'
import createLogger from "./logger";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    compose(
        applyMiddleware(
            createLogger,
            sagaMiddleware
            ),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);
sagaMiddleware.run(watchFetchCollections, {url: 'http://localhost:81/api/'});

export default store;
