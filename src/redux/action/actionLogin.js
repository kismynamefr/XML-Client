import { LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, LOGIN_USER } from "../constants/constantsFetch";
import axios from 'axios';

export const LoadItems = ({ username, password }) => async (dispatch) => {
    let url = "http://45.63.123.1/apiXML/v1/users/login";

    try {
        dispatch({ type: LOGIN_USER });
        await axios({
            method: 'post',
            url: url,
            data: {
                username,
                password
            }
        }).then(data => {
            const responseBody = data.data;
            dispatch({
                type: LOGIN_USER_SUCCESS,
                data: responseBody
            })
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: LOGIN_USER_ERROR,
            message: error
        })
    }
}