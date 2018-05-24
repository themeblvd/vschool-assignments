import { createStore } from "redux";

const initialState = [];

const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

export const addItem = item => {
    return {
        type: ADD_ITEM,
        item
    };
};

export const removeItem = index => {
    return {
        type: REMOVE_ITEM,
        index
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.item];
        case REMOVE_ITEM:
            return state.filter((item, i) => i !== action.index);
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
