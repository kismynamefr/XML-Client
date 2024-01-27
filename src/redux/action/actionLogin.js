import { LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, LOGIN_USER } from "../constants/constants";
import axios from 'axios';

const loginAction = ({ formValue }) => async (dispatch) => {
    let url = "https://www.bdei.xyz/apiXML/v1/users/login";

    try {
        dispatch({ type: LOGIN_USER });
        await axios({
            method: 'post',
            url: url,
            data: {
                username: formValue.username,
                password: formValue.password
            }
        }).then(data => {
            const responseBody = data.data;
            dispatch({
                type: LOGIN_USER_SUCCESS,
                data: responseBody
            })
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: LOGIN_USER_ERROR,
            data: error
        })
    }
}

export default loginAction;