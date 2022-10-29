import { DELETE_ACTIVATED_BOT_ERROR, DELETE_ACTIVATED_BOT_SUCCESS, DELETE_ACTIVATED_BOT } from "../constants/constants";
import axios from 'axios';
import Toast from "../../hooks/ToastProvider";

const delActivatedBotAction = (idBot, getActivatedBot) => async (dispatch) => {
    let url = "http://45.63.123.1/apiXML/v1/deleteActivatedBot";
    try {
        dispatch({ type: DELETE_ACTIVATED_BOT });
        await axios({
            method: 'post',
            url: url,
            data: {
                _id: idBot
            }
        }).then(data => {
            Toast("success", "Successfully deleted the activated Bot!!!")
            getActivatedBot();
            const responseBody = data.data;
            dispatch({
                type: DELETE_ACTIVATED_BOT_SUCCESS,
                data: responseBody
            })
        })
    } catch (error) {
        console.log(error);
        Toast("error", "Deleting the activated bot failed!!!")
        dispatch({
            type: DELETE_ACTIVATED_BOT_ERROR,
            data: error
        })
    }
}

export default delActivatedBotAction;