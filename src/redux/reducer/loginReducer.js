import { LOGIN_USER, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS } from "../constants/constants";
import { LOGOUT_USER_ERROR, LOGOUT_USER_SUCCESS, LOGOUT_USER } from "../constants/constants";

const initialState = {
    requesting: false,
    success: false,
    error: null,
    data: null,
    hasLogin: false
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
                hasLogin: true,
                error: null,
                data: payload.data
            };
        case LOGIN_USER_ERROR:

            return {
                ...state,
                requesting: false,
                success: false,
                error: payload.data
            };
        case LOGOUT_USER:
            return {
                ...state,
                requesting: true
            };
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                error: null,
                hasLogin: false,
            };
        case LOGOUT_USER_ERROR:

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

export default loginReducer;