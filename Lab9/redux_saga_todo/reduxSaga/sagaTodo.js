import { FETCH_TODOS } from "./actionSaga";
import { call, put, takeEvery } from "redux-saga/effects";

const api = {
    async fetchTodos() {
        return await fetch("https://67039ce3ab8a8f892730d9f4.mockapi.io/api/task")
            .then((response) => response.json());
    },
}

function* fetchTodos() {
    try {
        const todos = yield call(api.fetchTodos);
        yield put({ type: FETCH_TODOS, payload: todos });
    } catch (e) {
        console.log(e);
    }
}

export default function* todoSagas() {
    yield takeEvery(FETCH_TODOS, fetchTodos);
}