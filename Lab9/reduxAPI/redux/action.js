export const FETCH_TODOS = 'FETCH_TODOS';

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