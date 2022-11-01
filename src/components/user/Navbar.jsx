import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	const menus = [
		{ name: 'Beranda' },
		{ name: 'Pesan' },
	]

	const auths = [
		{ name: 'Masuk', link: '/login' },
		{ name: 'Daftar', link: '/register', className: ' px-4 py-2 rounded-lg  hover:bg-blue-500 hover:text-white border border-primary ' }
	]
	return (
		<div className='flex py-4 px-6 justify-between items-center text-primary'>
			<div className='flex items-center gap-12'>
				<div className='text-3xl font-bold font-oswald  tracking-wider'>
					MITRA TEKNIK
				</div>
				<div className='flex list-none gap-4 text-xl items-center'>
					{menus.map((menu, i) => (
						<li className='cursor-pointer hover:underline' key={i}>{menu.name}</li>
					))}
				</div>
			</div>
			<div className='flex list-none gap-4 text-xl items-center'>
				{auths.map((auth, i) => (
					<Link to={auth.link} key={i}>
						<li className={`cursor-pointer hover:underline ${auth.className}`} key={i}>{auth.name}</li>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Navbar