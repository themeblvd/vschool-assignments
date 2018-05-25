import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// Initial State

const initialState = {
    contacts: []
};

// Actions

export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';

export function addContact(contact) {
    return {
        type: ADD_CONTACT,
        contact
    };
}

export function removeContact(id) {
    return {
        type: REMOVE_CONTACT,
        id
    };
}

// Reducer

export function reducer(prevState = initialState, action) {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                contacts: [...prevState.contacts, action.contact]
            };
            break;

        case REMOVE_CONTACT:
            return {
                contacts: prevState.contacts.filter(
                    contact => contact.id !== action.id
                )
            };
            break;

        default:
            return prevState;
    }
}

// Persist Middleware

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

// Set up store (with Persist Middleware)

export const store = createStore(persistReducer(persistConfig, reducer));
export const persistor = persistStore(store);
