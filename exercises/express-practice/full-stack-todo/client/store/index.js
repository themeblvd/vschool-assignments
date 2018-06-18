import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const GET_TODOS = 'GET_TODOS';

const reducer = (state = [], action) => {
    switch (action.type) {
        case GET_TODOS:
            return action.todos;
        default:
            return state;
    }
};

export function getTodos() {
    return dispatch => {
        axios
            .get('/todos')
            .then(response => {
                dispatch({
                    type: GET_TODOS,
                    todos: response.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    };
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);
