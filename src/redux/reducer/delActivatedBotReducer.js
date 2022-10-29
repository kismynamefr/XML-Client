import { DELETE_BOT_ERROR, DELETE_BOT_SUCCESS, DELETE_BOT } from "../constants/constants";

const initialState = {
    requesting: false,
    success: false,
    error: null,
}

const delActivatedBotReducer = (state = initialState, payload) => {

    switch (payload.type) {
        case DELETE_BOT:
            return {
                ...state,
                requesting: true
            };
        case DELETE_BOT_SUCCESS:

            return {
                requesting: false,
                success: true,
                error: null,
            };
        case DELETE_BOT_ERROR:

            return {
                ...state,
                requesting: false,
                success: false,
            };
        default:
            return state;
    }
}

export default delActivatedBotReducer;