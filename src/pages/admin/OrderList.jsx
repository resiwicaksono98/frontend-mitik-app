import React, { useState } from 'react'
import Modal from '../../components/general/Modal'

const OrderList = () => {
	let [isOpenDetails, setIsOpenDetails] = useState(false)
	let [isOpenEdit, setIsOpenEdit] = useState(false)

	const modalDetails = () => setIsOpenDetails(!isOpenDetails)
	const modalEdit = () => setIsOpenEdit(!isOpenEdit)
	return (
		<div>
			<div className="text-xl">Order List</div>
			<button className='my-4 bg-primary text-white py-2 px-3 rounded-lg hover:bg-slate-800'>Create A New Order</button>
			<table className="table-auto border-collapse border border-slate-400 w-full">
				<thead className='bg-slate-200'>
					<tr>
						<th className='border border-slate-300'>No</th>
						<th className='border border-slate-300'>Name</th>
						<th className='border border-slate-300'>Order Type</th>
						<th className='border border-slate-300'>Status</th>
						<th className='border border-slate-300'>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr className='text-center'>
						<td className='border border-slate-300'>1</td>
						<td className='border border-slate-300'>Yono Surjoyono</td>
						<td className='border border-slate-300'>Pemasangan AC </td>
						<td className='border border-slate-300'>Progress</td>
						<div className='grid grid-cols-3 gap-2 py-2 px-2 text-white'>
							<button className='bg-blue-500 hover:bg-blue-700 rounded-lg py-2' onClick={modalDetails}>Detail</button>
							<button className='bg-green-500 hover:bg-green-700  rounded-lg py-2' onClick={modalEdit}>Edit</button>
							<button className='bg-red-500  hover:bg-red-700 rounded-lg py-2'>Delete</button>
						</div>

					</tr>
				</tbody>
			</table>
			{/* Modal Dialog Detail */}
			<Modal
				isOpen={isOpenDetails}
				handleModal={modalDetails}
				title={'Detail Order Yono'}
				content={'lorem ipsum'}
				button={'Tutup'}
			/>
			{/* Modal Dialog Edit */}
			<Modal
				isOpen={isOpenEdit}
				handleModal={modalEdit}
				title={'Edit Order si Yono'}
				content={'lorem ipsum'}
				button={'Tutup'}
			/>
		</div>
	)
}

export default OrderList