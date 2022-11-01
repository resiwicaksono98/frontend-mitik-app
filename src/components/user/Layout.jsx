import React from 'react'
import HomePage from '../../pages/HomePage'
import Navbar from './Navbar'

const Layout = ({ children }) => {
	return (
		<div className='font-lato bg-secondary'>
			<Navbar />
			<div className='p-6'>
				<HomePage />
			</div>
		</div>
	)
}

export default Layout