import { DELETE_BOT_ERROR, DELETE_BOT_SUCCESS, DELETE_BOT } from "../constants/constants";
import axios from 'axios';
import Toast from "../../hooks/ToastProvider";

const loginAction = (idBot, getBotHasUploaded) => async (dispatch) => {
    let url = "https://www.bdei.xyz/apiXML/v1/deleteBot";
    try {
        dispatch({ type: DELETE_BOT });
        await axios({
            method: 'post',
            url: url,
            data: {
                _id: idBot
            }
        }).then(data => {
            Toast("success", "Delete bot success!!!")
            getBotHasUploaded();
            const responseBody = data.data;
            dispatch({
                type: DELETE_BOT_SUCCESS,
                data: responseBody
            })
        })
    } catch (error) {
        console.log(error);
        Toast("error", "Delete bot error!!!")
        dispatch({
            type: DELETE_BOT_ERROR,
            data: error
        })
    }
}

export default loginAction;