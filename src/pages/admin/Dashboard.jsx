import React from 'react'
import { PresentationChartBarIcon, PaperClipIcon, BuildingOffice2Icon, UserGroupIcon } from '@heroicons/react/24/outline'

const Dashboard = () => {
	const datas = [
		{ name: 'Orders', icon: <PresentationChartBarIcon className='h-8' />, result: '61', desc: 'Total order so far' },
		{ name: 'Invoices', icon: <PaperClipIcon className='h-8' />, result: '52', desc: 'Total invoice so far' },
		{ name: 'Work Orders', icon: <BuildingOffice2Icon className='h-8' />, result: '81', desc: 'Total work order so far' },
		{ name: 'Users', icon: <UserGroupIcon className='h-8' />, result: '121', desc: 'Total user so far' },
	]
	return (
		<div>
			<div className='text-xl text-primary font-medium mb-6'>Welcome To Dashboard</div>
			<div className='grid grid-cols-4 gap-4'>
				{datas.map((data, i) => (
					<div className='bg-secondary p-6 rounded-lg text-primary'>
						<div className=' flex items-center justify-center gap-2 mb-4'>
							{data.icon}
							<div className='text-2xl font-medium'>{data.name}</div>
						</div>
						<div className=' flex flex-col items-center gap-2'>
							<div className='text-5xl'>{data.result}</div>
							<div className='text-sm'>{data.desc}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Dashboard