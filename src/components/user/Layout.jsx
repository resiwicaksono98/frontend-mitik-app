import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserCheck } from "../../features/UserAuthSlice";
import Dashboard from "../../pages/admin/Dashboard";
import HomePage from "../../pages/HomePage";
import Order from "../../pages/Order";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isLoading } = useSelector((state) => state.authUser);

  useEffect(() => {
    dispatch(UserCheck());
  }, [dispatch]);
  return (
    <div className="font-lato bg-secondary min-h-screen">
      <Navbar />
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Layout;
