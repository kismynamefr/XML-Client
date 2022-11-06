import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import getBotReducer from "./getBotReducer";
import deleteBotReducer from "./deleteBotReducer";
import uploadBotReducer from "./uploadBotReducer";
import activeBotReducer from "./activeBotReducer";
import getActivatedBotReducer from "./getActivatedBotReducer";
import delActivatedBotReducer from "./delActivatedBotReducer";
import editBotReducer from "./editBotReducer";

const reducers = combineReducers({
    login: loginReducer,
    getBot: getBotReducer,
    deteteBot: deleteBotReducer,
    uploadBot: uploadBotReducer,
    activeBot: activeBotReducer,
    getActivatedBot: getActivatedBotReducer,
    delActivatedBot: delActivatedBotReducer,
    editBotReducer: editBotReducer
});

export default (state, action) => reducers(state, action);