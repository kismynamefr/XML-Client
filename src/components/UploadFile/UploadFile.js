import jwt_decode from "jwt-decode";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Toast from "../../hooks/ToastProvider";
import logOutAction from '../../redux/action/actionLogout';
import SideBarWithHeader from '../SideBar/SideBarWithHeader';
import InsideUpload from './InsideUpload';

const UploadFile = () => {
    const dispatch = useDispatch();
    const hasLogin = useSelector((state) => state.login?.hasLogin);
    const user = useSelector((state) => state.login?.data);
    const decodedToken = jwt_decode(user?.accessToken);
    const navigate = useNavigate();

    useEffect(() => {
        if (!hasLogin) navigate("/Login");
    }, [hasLogin]);

    useEffect(() => {
        if (user && hasLogin && decodedToken?.exp < Number((new Date().getTime()) / 1000).toFixed(0)) {
            Toast("error", "Token has expired. Please login again");
            dispatch(logOutAction());
            navigate("/Login");
        }
    }, [])

    return (
        <SideBarWithHeader>
            <InsideUpload />
        </SideBarWithHeader>
    )
}

export default UploadFile
