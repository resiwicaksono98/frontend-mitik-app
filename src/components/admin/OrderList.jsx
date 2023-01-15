import React from "react";
import Modal from "../../../components/general/Modal";

export default function OrderList() {
  let [isOpenDetails, setIsOpenDetails] = useState(false);
  let [isOpenEdit, setIsOpenEdit] = useState(false);

  const modalDetails = () => setIsOpenDetails(!isOpenDetails);
  const modalEdit = () => setIsOpenEdit(!isOpenEdit);
  return (
    <div>
      <table className="table-auto border-collapse border border-slate-400 w-full">
        <thead className="bg-slate-200">
          <tr>
            <th className="border border-slate-300">No</th>
            <th className="border border-slate-300">Name</th>
            <th className="border border-slate-300">Order Type</th>
            <th className="border border-slate-300">Status</th>
            <th className="border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border border-slate-300">1</td>
            <td className="border border-slate-300">Yono Surjoyono</td>
            <td className="border border-slate-300">Pemasangan AC </td>
            <td className="border border-slate-300">Progress</td>
            <td className="grid grid-cols-4 gap-2 py-2 px-2 text-white">
              <Link
                to={"/admin/invoice/:id"}
                className="bg-primary hover:bg-slate-800 rounded-lg py-2"
              >
                Create Invoice
              </Link>
              <button
                className="bg-blue-500 hover:bg-blue-700 rounded-lg py-2"
                onClick={modalDetails}
              >
                Detail
              </button>
              <button
                className="bg-green-500 hover:bg-green-700  rounded-lg py-2"
                onClick={modalEdit}
              >
                Edit
              </button>
              <button className="bg-red-500  hover:bg-red-700 rounded-lg py-2">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Modal Dialog Detail */}
      <Modal
        isOpen={isOpenDetails}
        handleModal={modalDetails}
        title={"Detail Order Yono"}
        content={"lorem ipsum"}
        button={"Tutup"}
      />
      {/* Modal Dialog Edit */}
      <Modal
        isOpen={isOpenEdit}
        handleModal={modalEdit}
        title={"Edit Order si Yono"}
        content={
          <div>
            <form className="p-4 rounded-xl bg-slate-100">
              {/* User */}
              <div className="mb-4">
                <label htmlFor="user">User</label>
                <select name="order_type" className="w-full rounded-lg mt-2">
                  <option value="1">John Doe</option>
                </select>
              </div>
              {/* Order Type */}
              <div className="mb-4">
                <label htmlFor="order_type">Order Type</label>
                <select name="order_type" className="w-full rounded-lg mt-2">
                  <option value="1">Pemasangan AC DAIKIN 2PK</option>
                  <option value="2">Perbaikan AC Window</option>
                </select>
              </div>
              {/* Sparepart */}
              <div className="mb-4">
                <label htmlFor="sparepart">Sparepart</label>
                <select name="order_type" className="w-full rounded-lg mt-2">
                  <option value="1">AC DAIKIN 2PK</option>
                  <option value="2">AC COSMOS 1PK</option>
                </select>
              </div>
              {/* Description */}
              <div className="mb-4">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  className="w-full rounded-lg mt-1"
                ></textarea>
              </div>
              {/* Button submit */}
              <button className="bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-slate-700">
                Edit Order
              </button>
            </form>
          </div>
        }
        button={"Tutup"}
      />
    </div>
  );
}
