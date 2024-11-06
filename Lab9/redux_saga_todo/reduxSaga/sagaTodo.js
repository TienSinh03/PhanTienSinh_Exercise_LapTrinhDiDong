import { FETCH_TODOS, fetchTodosSuccess, ADD_TODOS,fetchTodos,EDIT_TODOS,DELETE_TODOS } from "./actionSaga";
import { call, put, takeEvery } from "redux-saga/effects";

const API_URL = 'https://67039ce3ab8a8f892730d9f4.mockapi.io/api/task';

const api = {
    fetchTasks: async () => {
        const response = await fetch(API_URL);
        return await response.json();
    },
    addTask: async (task) => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task),
        })
        return await response.json();
    },
    editTask: async (task,id) => {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify(task),
        })
        return await response.json();
    },
    deleteTask: async (id) => {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
    }

}

function* fetchTask() {
    const todos = yield call(api.fetchTasks);
    yield put(fetchTodosSuccess(todos));
}

function* addTodos(action) {
    const newTask = yield call(api.addTask, action.payload);
    yield put(fetchTodos());
}

function* editTodos(action) {
    yield call(api.editTask, action.payload, action.id);
    yield put(fetchTodos());
}
function* deleteTodos(action) {
    yield call(api.deleteTask, action.id);
    yield put(fetchTodos());
}

export default function* todoSagas() {
    yield takeEvery(FETCH_TODOS, fetchTask);
    yield takeEvery(ADD_TODOS, addTodos);
    yield takeEvery(EDIT_TODOS, editTodos);
    yield takeEvery(DELETE_TODOS, deleteTodos);
}