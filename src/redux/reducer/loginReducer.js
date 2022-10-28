import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "../constants/constants";

const initialState = {
    requesting: false,
    success: false,
    error: null,
    data: null
}

const loginReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case LOGIN_USER:
            return {
                ...state,
                requesting: true
            };
        case LOGIN_USER_SUCCESS:

            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.data
            };
        case LOGIN_USER_ERROR:

            return {
                ...state,
                requesting: false,
                success: false,
                error: payload.error
            };
        default:
            return state;
    }
}

export default loginReducer;