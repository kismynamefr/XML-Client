import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import getBotReducer from "./getBotReducer";
import deleteBotReducer from "./deleteBotReducer";
import uploadBotReducer from "./uploadBotReducer";

const reducers = combineReducers({
    login: loginReducer,
    getBot: getBotReducer,
    deteteBot: deleteBotReducer,
    uploadBot: uploadBotReducer,
});

export default (state, action) => reducers(state, action);