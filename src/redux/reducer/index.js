import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import getBotReducer from "./getBotReducer";
import deleteBotReducer from "./deleteBotReducer";

const reducers = combineReducers({
    login: loginReducer,
    getBot: getBotReducer,
    deteteBot: deleteBotReducer,
});

export default (state, action) => reducers(state, action);