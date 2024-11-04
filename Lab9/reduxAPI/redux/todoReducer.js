import { FETCH_TODOS } from "./action";

const initialState = {
    todos: [],
}

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TODOS:
            return {...state, todos: action.payload}
        default:
            return state;
    }
}

export default todoReducer;