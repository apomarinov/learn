import {put, call} from "@redux-saga/core/effects";
import { takeLatest } from 'redux-saga/effects'
import axios from 'axios'

export function* fetchBooks(api, {collection}) {
    try {
        const data = yield call(axios.get, api.url + 'collections/' + collection + '/books');
        yield put({ type: "GET_BOOKS_DONE", books: data.data });
    } catch (e) {
        yield put({ type: "GET_BOOKS_FAIL", message: e });
    }
}

export function* watchFetchBooks(api) {
    yield takeLatest('GET_BOOKS_START', fetchBooks, api)
}

export function* fetchBook(api, {collection, slug}) {
    try {
        const data = yield call(axios.get, api.url + 'collections/' + collection + '/books/' + slug);
        yield put({ type: "GET_BOOK_DONE", book: data.data });
    } catch (e) {
        yield put({ type: "GET_BOOK_FAIL", message: e });
    }
}

export function* watchFetchBook(api) {
    yield takeLatest('GET_BOOK_START', fetchBook, api)
}
