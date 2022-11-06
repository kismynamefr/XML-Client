import {
  GET_ACTIVE_BOT_ERROR,
  GET_ACTIVE_BOT_SUCCESS,
  GET_ACTIVE_BOT,
} from "../constants/constants";

const initialState = {
  requesting: false,
  error: null,
  data: null,
};

const getActivatedBotReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case GET_ACTIVE_BOT:
      return {
        ...state,
        requesting: true,
      };
    case GET_ACTIVE_BOT_SUCCESS:
      return {
        requesting: false,
        error: null,
        data: payload.data,
      };
    case GET_ACTIVE_BOT_ERROR:
      return {
        requesting: false,
        data: null,
        error: payload.data,
      };
    default:
      return state;
  }
};

export default getActivatedBotReducer;
