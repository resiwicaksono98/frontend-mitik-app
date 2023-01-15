import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAdminCheck } from "../features/adminAuthSlice";

export default function CallAuth({ children }) {
  const dispatch = useDispatch();
  const { admin, isError, isSuccess, isLoading } = useSelector(
    (state) => state.authAdmin
  );

  useEffect(() => {
    dispatch(AuthAdminCheck());
  }, [dispatch]);

  return children;
}
