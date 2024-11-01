
export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const fetchTodos = () => async (dispatch) => {
    try {
        const response = await fetch('https://67039ce3ab8a8f892730d9f4.mockapi.io/api/task');
        const json = await response.json();
        dispatch({
            type: FETCH_TODOS,
            payload: json
        });
    } catch (e) {
        console.log(e);
    }
};

export const addTask = (task) => async (dispatch) => {
    try {
        const response = await fetch('https://67039ce3ab8a8f892730d9f4.mockapi.io/api/task', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task) 
        });
        const newTodo = await response.json();
        dispatch({
            type: ADD_TODO,
            payload: newTodo 
        });
    } catch (e) {
        console.log(e);
    }
};

export const editTask = (id, task) => async (dispatch) => {
    try {
        const response = await fetch(`https://67039ce3ab8a8f892730d9f4.mockapi.io/api/task/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task) // sửa từ JSON thành body
        });
        const updatedTask = await response.json();
        dispatch({
            type: UPDATE_TODO,
            payload: updatedTask 
        });
    } catch (e) {
        console.log(e);
    }
};

export const deleteTask = (id) => async (dispatch) => {
    try {
        await fetch(`https://67039ce3ab8a8f892730d9f4.mockapi.io/api/task/${id}`, {
            method: 'DELETE',
        });
        dispatch({
            type: DELETE_TODO,
            payload: id 
        });
    } catch (e) {
        console.log(e);
    }
};
