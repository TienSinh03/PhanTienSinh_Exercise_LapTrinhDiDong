import { FETCH_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../redux/actions";

// khởi tạo state ban đầu có mảng todos
const initialState = { todos: [] };

const  toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, todos: action.payload };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case UPDATE_TODO:
        return {...state,
            todos: state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo))
        }
    case DELETE_TODO:
        return { ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload)
        }
    default:
      return state;
  }
}

export default toDoReducer;
