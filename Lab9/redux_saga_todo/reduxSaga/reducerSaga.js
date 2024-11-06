import { FETCH_TODOS, FETCH_TODOS_SUCCESS,ADD_TODOS,EDIT_TODOS, DELETE_TODOS } from "./actionSaga";

const initialState = {
    todos: [],
};

const reducerSaga = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload,
            };
        case ADD_TODOS:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };

        case EDIT_TODOS:
            return {
                ...state,
                todos: state.todos.map((task) => {
                    if(task.id === action.id) {
                        return action.payload;
                    }
                    return task;
                })
            }
        case DELETE_TODOS: 
            return {
                ...state,
                todos: state.todos.filter((task) => task.id !== action.id),
            }
        
        default:
            return state;
    }
};

export default reducerSaga;