import { createBrowserRouter, Navigate, useNavigate } from "react-router-dom";
import LayoutAdmin from "../components/admin/Layout";
import Layout from "../components/user/Layout";
import LoginAdmin from "../pages/admin/LoginAdmin";
import Dashboard from "../pages/admin/Dashboard";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Invoice from "../pages/admin/invoice/Invoice";
import ManageUser from "../pages/admin/account/ManageUser";
import ManageEngineer from "../pages/admin/account/ManageEngineer";
import ManageAdmin from "../pages/admin/account/ManageAdmin";
import Order from "../pages/Order";
import DashboardUser from "../pages/DashboardUser";
import HomePage from "../pages/HomePage";
import WorkOrder from "../pages/admin/work_order/WorkOrder";
import OrderList from "../pages/admin/order/OrderList";
import { useDispatch, useSelector } from "react-redux";
import { AuthAdminCheck } from "../features/adminAuthSlice";
import { useEffect } from "react";
import Loading from "../components/general/Loading";
import CreateOrder from "../pages/admin/order/CreateOrder";
import CreateWorkOrder from "../pages/admin/work_order/CreateWorkOrder";
import CreateInvoice from "../pages/admin/invoice/CreateInvoice";
import CreateUser from "../pages/admin/account/CreateUser";
import CreateEngineer from "../pages/admin/account/CreateEngineer";
import CreateAdmin from "../pages/admin/account/CreateAdmin";
import DetailOrder from "../pages/admin/order/DetailOrder";
import SparepartList from "../pages/admin/sparepart/SparepartList";
import CreateSparepart from "../pages/admin/sparepart/CreateSparepart";
import SuccessOrder from "../pages/SuccessOrder";

const AuthAdmin = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admin, isError, isLoading } = useSelector((state) => state.authAdmin);

  useEffect(() => {
    dispatch(AuthAdminCheck());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/admin/login");
    }
  }, [isError]);
  if (isLoading) {
    return <Loading />;
  }
  return children;
};

export const MainRouter = createBrowserRouter([
  // User Routes
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/order",
    element: (
      <Layout>
        <Order />
      </Layout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Layout>
        <DashboardUser />
      </Layout>
    ),
  },
  {
    path: "/order/:id/success",
    element: <SuccessOrder />,
  },
  // Auth User
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  // Auth Admin
  {
    path: "/admin/login",
    element: (
      <AuthAdmin>
        <LoginAdmin />
      </AuthAdmin>
    ),
  },
  // Admin & Engineer Route
  {
    path: "/admin",
    element: (
      <AuthAdmin>
        <LayoutAdmin />,
      </AuthAdmin>
    ),

    children: [
      // Dashboard
      {
        path: "/admin",
        element: <Dashboard />,
      },
      //   Work order
      {
        path: "/admin/work_order",
        element: <WorkOrder />,
      },
      {
        path: "/admin/work_order/:id",
        element: <CreateWorkOrder />,
      },
      //   Order
      {
        path: "/admin/order",
        element: <OrderList />,
      },
      {
        path: "/admin/order/new",
        element: <CreateOrder />,
      },
      //   Invoice
      {
        path: "/admin/invoice",
        element: <Invoice />,
      },
      {
        path: "/admin/invoice/:id",
        element: <CreateInvoice />,
      },
      //   Sparepart
      {
        path: "/admin/sparepart",
        element: <SparepartList />,
      },
      {
        path: "/admin/sparepart/:id",
        element: <CreateSparepart />,
      },
      //   Manage user
      {
        path: "/admin/users",
        element: <ManageUser />,
      },
      {
        path: "/admin/users/new",
        element: <CreateUser />,
      },
      //  Manage Engineer
      {
        path: "/admin/engineers",
        element: <ManageEngineer />,
      },
      {
        path: "/admin/engineers/new",
        element: <CreateEngineer />,
      },
      //   Manage admin
      {
        path: "/admin/admins",
        element: <ManageAdmin />,
      },
      {
        path: "/admin/admins/new",
        element: <CreateAdmin />,
      },
    ],
  },
]);
