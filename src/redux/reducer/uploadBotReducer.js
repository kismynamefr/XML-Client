import { UPLOAD_BOT_ERROR, UPLOAD_BOT_SUCCESS, UPLOAD_BOT } from "../constants/constants";

const initialState = {
    requesting: false,
    success: false,
    error: null,
}

const uploadBotReducer = (state = initialState, payload) => {

    switch (payload.type) {
        case UPLOAD_BOT:
            return {
                ...state,
                requesting: true
            };
        case UPLOAD_BOT_SUCCESS:

            return {
                requesting: false,
                success: true,
                error: null,
            };
        case UPLOAD_BOT_ERROR:

            return {
                ...state,
                requesting: false,
                success: false,
            };
        default:
            return state;
    }
}

export default uploadBotReducer;