import { createBrowserRouter } from 'react-router-dom'
import LayoutAdmin from '../components/admin/Layout'
import Layout from '../components/user/Layout'
import LoginAdmin from '../pages/admin/LoginAdmin'
import Dashboard from '../pages/admin/Dashboard'
import WorkOrder from '../pages/admin/WorkOrder'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import OrderList from '../pages/admin/OrderList'
import Invoice from '../pages/admin/order/Invoice'


export const MainRouter = createBrowserRouter([
	// User Routes
	{ path: '/', element: <Layout /> },
	{ path: '/login', element: <Login /> },
	{ path: '/register', element: <Register /> },
	// Auth Admin
	{ path: '/admin/login', element: <LoginAdmin /> },
	// Admin & Engineer Route
	{
		path: '/admin',
		element: <LayoutAdmin />,
		children: [
			{
				path: '/admin',
				element: <Dashboard />
			},
			{
				path: '/admin/work_order',
				element: <WorkOrder />
			},
			{
				path: '/admin/order',
				element: <OrderList />
			},
			{
				path: '/admin/invoice',
				element: <Invoice />
			},

		]
	}
])