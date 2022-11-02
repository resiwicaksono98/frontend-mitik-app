import React from "react";
import Dashboard from "../../pages/admin/Dashboard";
import HomePage from "../../pages/HomePage";
import Order from "../../pages/Order";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="font-lato bg-secondary min-h-screen">
      <Navbar />
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Layout;
