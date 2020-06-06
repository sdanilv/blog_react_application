import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postReducer from "./Post/PostReducer";
import openPostReducer from "./OpenPost/OpenPostReducer";

const reducers = combineReducers({ Post: postReducer, OpenPost: openPostReducer });
const store = createStore(reducers, applyMiddleware(thunk));

export default store;

export type GlobalState = ReturnType<typeof reducers>;
export type Action<K, V = {}> = { type: K }&V;
