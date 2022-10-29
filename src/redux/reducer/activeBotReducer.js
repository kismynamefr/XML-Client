import { ACTIVE_BOT_ERROR, ACTIVE_BOT_SUCCESS, ACTIVE_BOT } from "../constants/constants";

const initialState = {
    requesting: false,
    success: false,
    error: null,
}

const activeBotReducer = (state = initialState, payload) => {

    switch (payload.type) {
        case ACTIVE_BOT:
            return {
                ...state,
                requesting: true
            };
        case ACTIVE_BOT_SUCCESS:

            return {
                requesting: false,
                success: true,
                error: null,
            };
        case ACTIVE_BOT_ERROR:

            return {
                ...state,
                requesting: false,
                success: false,
            };
        default:
            return state;
    }
}

export default activeBotReducer;