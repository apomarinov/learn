import {put, call} from "@redux-saga/core/effects";
import { takeLatest } from 'redux-saga/effects'
import axios from 'axios'

export function* fetchCollections(api) {
    try {
        const data = yield call(axios.get, api.url + 'collections');
        yield put({ type: "GET_ALL_COLLECTIONS_DONE", collections: data.data });
    } catch (e) {
        yield put({ type: "GET_ALL_COLLECTIONS_FAIL", message: e });
    }
}

export function* watchFetchCollections(api) {
    yield takeLatest('GET_ALL_COLLECTIONS_START', fetchCollections, api)
}
