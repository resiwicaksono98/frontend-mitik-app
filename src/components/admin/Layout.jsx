import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const LayoutAdmin = () => {
	return (
		<div className='flex font-lato'>
			<div className="bg-secondary h-screen basis-1/6 p-6 ">
				<Sidebar />
			</div>
			<div className='flex-auto'>
				<div className='flex justify-end pt-2'>
					<button className='py-2 px-4 mr-8 bg-primary text-white rounded-lg  hover:underline'>Logout</button>
				</div>
				<div className='p-6'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default LayoutAdmin