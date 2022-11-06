import {
  EDIT_BOT_ERROR,
  EDIT_BOT_SUCCESS,
  EDIT_BOT,
} from "../constants/constants";
import axios from "axios";
import Toast from "../../hooks/ToastProvider";

const actionEditBot =
  ({ formValue, getActivatedBot }) =>
  async (dispatch) => {
    let url = "http://45.63.123.1/apiXML/v1/editActivatedBot";

    try {
      dispatch({ type: EDIT_BOT });
      await axios({
        method: "post",
        url: url,
        data: {
          formValue,
        },
      }).then(() => {
        Toast("success", "Edited Bot Success!!!");
        getActivatedBot();
        dispatch({
          type: EDIT_BOT_SUCCESS,
        });
      });
    } catch (error) {
      console.log(error);
      Toast("error", "Edited Bot failed!!!");
      dispatch({
        type: EDIT_BOT_ERROR,
        data: error,
      });
    }
  };

export default actionEditBot;
