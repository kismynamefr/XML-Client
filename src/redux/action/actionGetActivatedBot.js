import {
  GET_ACTIVE_BOT_ERROR,
  GET_ACTIVE_BOT_SUCCESS,
  GET_ACTIVE_BOT,
} from "../constants/constants";
import axios from "axios";

const getActivatedBotAction = () => async (dispatch) => {
  let url = "http://45.76.199.19/apiXML/v1/getActivatedBot";

  try {
    dispatch({ type: GET_ACTIVE_BOT });
    await axios({
      method: "get",
      url: url,
    }).then((data) => {
      const responseBody = data.data;
      dispatch({
        type: GET_ACTIVE_BOT_SUCCESS,
        data: responseBody,
      });
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_ACTIVE_BOT_ERROR,
      data: error,
    });
  }
};

export default getActivatedBotAction;
