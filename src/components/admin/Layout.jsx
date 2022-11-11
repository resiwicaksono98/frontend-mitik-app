import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { authRequest } from "../../utils/axiosInstance";
import Sidebar from "./Sidebar";

const LayoutAdmin = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await authRequest.delete("/logout");
      alert("Success Logout");
      navigate(0);
    } catch (error) {
      alert("Error Logout");
    }
  };
  return (
    <div className=" font-lato flex ">
      <div className="bg-secondary px-6 py-6  h-screen max-h-full ">
        <Sidebar />
      </div>
      <div className="flex-auto">
        <div className="flex justify-end pt-2">
          <button
            className="py-2 px-4 mr-8 bg-primary text-white rounded-lg  hover:underline"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
