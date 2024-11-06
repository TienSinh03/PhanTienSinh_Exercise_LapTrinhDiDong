
export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';

export const ADD_TODOS = 'ADD_TODOS';
export const EDIT_TODOS = 'EDIT_TODOS';
export const DELETE_TODOS = 'DELETE_TODOS';

export const fetchTodos = () => {
    return {
        type: FETCH_TODOS,
    };
}

export const fetchTodosSuccess = (todos) => {
    console.log(todos);
    return {
        type: FETCH_TODOS_SUCCESS,
        payload: todos,
    };
}

export const addTasks = (tasks) => {
    return {
        type: ADD_TODOS,
        payload: tasks,
    };
}

export const editTask = (id,task) => {
    return {
        type: EDIT_TODOS,
        id: id,
        payload: task,
    };
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TODOS,
        id: id,
    };
}


