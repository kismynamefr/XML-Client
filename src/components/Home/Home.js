import jwt_decode from "jwt-decode";
import { default as React, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Toast from "../../hooks/ToastProvider";
import logOutAction from '../../redux/action/actionLogout';
import SideBarWithHeader from '../SideBar/SideBarWithHeader';
import TableIndex from '../Table/Table';
import getActivatedBotAction from "../../redux/action/actionGetActivatedBot";

const Home = () => {
    const dispatch = useDispatch();
    const hasLogin = useSelector((state) => state.login?.hasLogin);
    const user = useSelector((state) => state.login?.data);
    const activatedBot = useSelector((state) => state.getActivatedBot?.data);
    const navigate = useNavigate();
    let decodedToken;

    if(user) decodedToken = jwt_decode(user?.accessToken);

    const getActivatedBot = () => {
        dispatch(getActivatedBotAction());
    }

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

    useEffect(() => {
        if (user && hasLogin) {
            getActivatedBot()
        }
    }, [])

    return (
        <SideBarWithHeader>
            <TableIndex activatedBot={activatedBot} getActivatedBot={getActivatedBot}/>
        </SideBarWithHeader>

    )
}

export default Home
