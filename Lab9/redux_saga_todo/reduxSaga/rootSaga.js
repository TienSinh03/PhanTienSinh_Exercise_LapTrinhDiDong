import { all } from 'redux-saga/effects'
import todoSagas from './sagaTodo'

export default function* rootSaga() {
    yield all([
        todoSagas()
    ])
} 