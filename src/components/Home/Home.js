import jwt_decode from "jwt-decode";
import { default as React, useCallback, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Toast from "../../hooks/ToastProvider";
import logOutAction from "../../redux/action/actionLogout";
import SideBarWithHeader from "../SideBar/SideBarWithHeader";
import TableIndex from "../Table/Table";

const Home = () => {
  const dispatch = useDispatch();
  const hasLogin = useSelector((state) => state.login?.hasLogin);
  const user = useSelector((state) => state.login?.data);
  const navigate = useNavigate();
  let decodedToken;

  if (user) decodedToken = jwt_decode(user?.accessToken);

  useEffect(() => {
    if (!hasLogin) navigate("/Login");
  }, [hasLogin]);

  useEffect(() => {
    if (
      user &&
      hasLogin &&
      decodedToken?.exp < Number(new Date().getTime() / 1000).toFixed(0)
    ) {
      Toast("error", "Token has expired. Please login again");
      dispatch(logOutAction());
      navigate("/Login");
    }
  }, []);

  return (
    <SideBarWithHeader>
      <TableIndex />
    </SideBarWithHeader>
  );
};

export default memo(Home);
