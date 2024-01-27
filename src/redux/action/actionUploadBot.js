import { UPLOAD_BOT_ERROR, UPLOAD_BOT_SUCCESS, UPLOAD_BOT } from "../constants/constants";
import axios from 'axios';
import Toast from "../../hooks/ToastProvider";

const actionUploadBot = ({ formValue }) => async (dispatch) => {
    let url = "https://www.bdei.xyz/apiXML/v1/uploadbot";

    try {
        dispatch({ type: UPLOAD_BOT });
        await axios({
            method: 'post',
            url: url,
            data: {
                NameBot: formValue.NameBot,
                ValueBot: formValue.ValueBot,
            }
        }).then(data => {
            Toast("success", "Upload bot success!!!")
            const responseBody = data.data;
            dispatch({
                type: UPLOAD_BOT_SUCCESS,
                data: responseBody
            })
        })
    } catch (error) {
        console.log(error);
        Toast("error", "Upload bot error!!!")
        dispatch({
            type: UPLOAD_BOT_ERROR,
            data: error
        })
    }
}

export default actionUploadBot;