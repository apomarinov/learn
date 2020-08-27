import collections from "./collections";
import {combineReducers} from "redux";
import books from "./books";

const reducers = combineReducers({
    collections,
    books
});

export default reducers;
