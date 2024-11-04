import { combineReducers } from "redux";
import reducerSaga from "./reducerSaga"

const rootReducer = combineReducers({
    todos: reducerSaga,
});

export default rootReducer;