import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

const reducers = combineReducers({
    login: loginReducer,
});

export default (state, action) => reducers(state, action);