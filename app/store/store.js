import {createStore, combineReducers, compose} from "redux";
import {/* reducers here */} from "../reducers";

export let configure = () => {
    let reducer = combineReducers({
        /*
        state items here and their reducers

        searchTerm: searchTermReducer,
        todos: todoReducer
        */
    });

    return createStore(reducer, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};