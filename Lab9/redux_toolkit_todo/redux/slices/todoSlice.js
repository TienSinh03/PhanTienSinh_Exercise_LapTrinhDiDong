import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = 'https://67039ce3ab8a8f892730d9f4.mockapi.io/api/task';

const fetchTodos = createAsyncThunk('fetchTodos', async () =>{
    const response = await fetch(API_URL);
    return await response.json();
})

const addTodo = createAsyncThunk('addTodo', async (task) =>{
    const response = await fetch(API_URL, {
        method:'POST',
        headers :{'Content-Type' :'application/json'},
        body: JSON.stringify(task),
    })
    return await response.json();
})

const editTodo = createAsyncThunk('editTodo', async (task) => {

    const response = await fetch(`${API_URL}/${task.id}`, {
        method:'PUT',
        headers :{'Content-Type' :'application/json'},
        body: JSON.stringify(task),
    })
    return await response.json();
    
})

const deleteTodo =  createAsyncThunk('deleteTodo', async (id) =>{
    await fetch(`${API_URL}/${id}`,{
        method:'DELETE',
    })
    return id;
})

const todosSlice = createSlice({
    name:'todos',
    initialState: {todos: []},
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchTodos.fulfilled, (state, action) =>{
            state.todos = action.payload;
        })
        builder.addCase(addTodo.fulfilled, (state,action) => {
            state.todos= [...state.todos, action.payload];
        })
        builder.addCase(editTodo.fulfilled, (state,action) => {
            state.todos = state.todos.map((task) => task.id === action.payload.id ? action.payload : task);
        })
        builder.addCase(deleteTodo.fulfilled, (state,action) => {
            state.todos = state.todos.filter(task => task.id !== action.payload);            
        })
    }
});

export {fetchTodos, addTodo, editTodo, deleteTodo};
export default todosSlice.reducer;