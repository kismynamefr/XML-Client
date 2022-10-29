import { GET_BOT_ERROR, GET_BOT_SUCCESS, GET_BOT } from "../constants/constants";

const initialState = {
    requesting: false,
    success: false,
    error: null,
    data: null,
}

const getBotReducer = (state = initialState, payload) => {

    switch (payload.type) {
        case GET_BOT:
            return {
                ...state,
                requesting: true
            };
        case GET_BOT_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                error: null,
                data: payload.data
            };
        case GET_BOT_ERROR:

            return {
                ...state,
                requesting: false,
                success: false,
                error: payload.data
            };
        default:
            return state;
    }
}

export default getBotReducer;