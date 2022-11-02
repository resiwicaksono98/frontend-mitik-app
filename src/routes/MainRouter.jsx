import { createBrowserRouter } from "react-router-dom";
import LayoutAdmin from "../components/admin/Layout";
import Layout from "../components/user/Layout";
import LoginAdmin from "../pages/admin/LoginAdmin";
import Dashboard from "../pages/admin/Dashboard";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Invoice from "../pages/admin/order/Invoice";
import ManageUser from "../pages/admin/account/ManageUser";
import ManageEngineer from "../pages/admin/account/ManageEngineer";
import ManageAdmin from "../pages/admin/account/ManageAdmin";
import Order from "../pages/Order";
import DashboardUser from "../pages/DashboardUser";
import HomePage from "../pages/HomePage";
import WorkOrder from "../pages/admin/order/WorkOrder";
import OrderList from "../pages/admin/order/OrderList";

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
  // Auth User
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  // Auth Admin
  { path: "/admin/login", element: <LoginAdmin /> },
  // Admin & Engineer Route
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/work_order",
        element: <WorkOrder />,
      },
      {
        path: "/admin/order",
        element: <OrderList />,
      },
      {
        path: "/admin/invoice",
        element: <Invoice />,
      },
      {
        path: "/admin/users",
        element: <ManageUser />,
      },
      {
        path: "/admin/engineers",
        element: <ManageEngineer />,
      },
      {
        path: "/admin/admins",
        element: <ManageAdmin />,
      },
    ],
  },
]);
