import { LOGOUT_USER_ERROR, LOGOUT_USER_SUCCESS, LOGOUT_USER } from "../constants/constants";
import axios from 'axios';

const logOutAction = () => async (dispatch) => {
    let url = "http://45.63.123.1/apiXML/v1/users/logout";

    try {
        dispatch({ type: LOGOUT_USER });
        await axios({
            method: 'post',
            url: url,
        }).then(data => {
            const responseBody = data.data;
            dispatch({
                type: LOGOUT_USER_SUCCESS,
                data: responseBody
            })
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: LOGOUT_USER_ERROR,
            data: error
        })
    }
}

export default logOutAction;