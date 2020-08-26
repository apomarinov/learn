import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducers from "./reducers";
import {watchFetchCollection, watchFetchCollections} from './sagas/collections'
import createLogger from "./logger";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    {
        collections: {
            all: [],
            current: undefined
        }
    },
    compose(
        applyMiddleware(
            createLogger,
            sagaMiddleware
            ),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);
const config = {url: 'http://localhost:81/api/'};
sagaMiddleware.run(watchFetchCollections, config);
sagaMiddleware.run(watchFetchCollection, config);

export default store;
