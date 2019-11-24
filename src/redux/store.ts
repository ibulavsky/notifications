import {applyMiddleware, combineReducers, createStore} from "redux";
import notificationReducer from "./notificationReducer";
import thunk from "redux-thunk"
import { IState } from "../App";

export interface IStore {
    notifications: IState,
}

const reducers = combineReducers({
    notifications: notificationReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
