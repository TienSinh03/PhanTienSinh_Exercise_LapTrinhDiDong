import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducerSaga from './reducerSaga'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducerSaga, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;