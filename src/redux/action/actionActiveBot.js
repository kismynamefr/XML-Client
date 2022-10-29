import { ACTIVE_BOT_ERROR, ACTIVE_BOT_SUCCESS, ACTIVE_BOT } from "../constants/constants";
import axios from 'axios';
import Toast from "../../hooks/ToastProvider";

const activeBotAction = ({ formValue }) => async (dispatch) => {
    let url = "http://45.63.123.1/apiXML/v1/activebot";
    try {
        dispatch({ type: ACTIVE_BOT });
        await axios({
            method: 'post',
            url: url,
            data: {
                formValue
            }
        }).then(data => {
            Toast("success", "Activated Bot!!!")
            const responseBody = data.data;
            dispatch({
                type: ACTIVE_BOT_SUCCESS,
                data: responseBody
            })
        })
    } catch (error) {
        console.log(error);
        Toast("error", "Saving bot activation data failed!!!")
        dispatch({
            type: ACTIVE_BOT_ERROR,
            data: error
        })
    }
}

export default activeBotAction;