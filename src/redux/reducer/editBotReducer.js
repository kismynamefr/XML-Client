import { EDIT_BOT_ERROR, EDIT_BOT_SUCCESS, EDIT_BOT } from "../constants/constants";

const initialState = {
    requesting: false,
    error: null,
}

const editBotReducer = (state = initialState, payload) => {

    switch (payload.type) {
        case EDIT_BOT:
            return {
                ...state,
                requesting: true
            };
        case EDIT_BOT_SUCCESS:

            return {
                requesting: false,
                error: null
            };
        case EDIT_BOT_ERROR:

            return {
                ...state,
                requesting: false,
                error: payload.error
            };
        default:
            return state;
    }
}

export default editBotReducer;