import { FETCH_TODOS } from "./actionSaga";

const initialState = {
    todos: [],
};

const reducerSaga = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return {
                ...state,
                todos: action.payload,
            };
        default:
            return state;
    }
};

export default reducerSaga;