import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<div className='bg-secondary h-screen'>
			<div className='flex  justify-center items-center h-full'>
				<div className=' mx-4 lg:mx-96 bg-white w-full rounded-xl  '>
					<div className="p-5 flex flex-col w-full items-center gap-3 text-primary tracking-wider">
						<div className=" font-bold text-3xl">Login Page</div>
						<div className='text-sm '>Hey, Enter your details to get sign in to your account</div>
						<form className='py-4'>
							<div className='mb-4'>
								<label htmlFor="email">Email</label>
								<input type="text" className=' w-full mt-1 rounded-lg ' />
							</div>
							<div className='mb-4'>
								<label htmlFor="password">Password</label>
								<input type="password" className='w-full mt-1 rounded-lg' />
							</div>
							<button className='w-full mb-4 bg-primary py-2 px-3 text-white rounded-lg hover:bg-gray-600'>Login</button>
							<div>Dont have a acoount? <Link to={'/register'} className="underline hover:text-gray-500">Register Now</Link></div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login