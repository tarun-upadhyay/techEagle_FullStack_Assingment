import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducer as AppReducer } from "./Products/reducer";
import { reducer as AuthReducer } from "./Auth/reducer";

const rootReducer = combineReducers({ AppReducer,AuthReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
