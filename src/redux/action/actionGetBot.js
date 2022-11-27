import { GET_BOT_ERROR, GET_BOT_SUCCESS, GET_BOT } from "../constants/constants";
import axios from 'axios';

const loginAction = () => async (dispatch) => {
    let url = "http://45.76.199.19/apiXML/v1/getbot";

    try {
        dispatch({ type: GET_BOT });
        await axios({
            method: 'get',
            url: url
        }).then(data => {
            const responseBody = data.data;
            dispatch({
                type: GET_BOT_SUCCESS,
                data: responseBody
            })
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_BOT_ERROR,
            data: error
        })
    }
}

export default loginAction;