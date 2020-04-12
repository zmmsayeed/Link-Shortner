import { put, takeLatest, all } from 'redux-saga/effects';
import { apiUrl } from '../config';
import { createLinkResponse } from '../actions';

function* createLinkFunc(data) {
    const json = yield fetch(apiUrl+'createLink', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data.data),
    })
        .then(response => response.json());

    yield put(createLinkResponse({ json: json || [{ error: json }] }));
}


function* actionWatcher() {
    yield takeLatest('CREATE_LINK', createLinkFunc);
}


export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}

