import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authRequest } from "../../../utils/axiosInstance";
import DetailWorkOrder from "./DetailWorkOrder";
import EditWorkOrder from "./EditWorkOrder";

const WorkOrder = () => {
  let [isOpenDetails, setIsOpenDetails] = useState(false);
  let [isOpenEdit, setIsOpenEdit] = useState(false);
  const navigate = useNavigate();
  const [workOrders, setWorkOrders] = useState([]);
  const [workOrderById, setWorkOrderById] = useState();

  const modalDetails = async ({ id }) => {
    if (id) {
      const { data } = await authRequest.get(`/admin/work_orders/${id}`);
      setWorkOrderById(data.data);
    }
    setIsOpenDetails(!isOpenDetails);
  };
  const modalEdit = async ({ id }) => {
    if (id) {
      const { data } = await authRequest.get(`/admin/work_orders/${id}`);
      setWorkOrderById(data.data);
    }
    setIsOpenEdit(!isOpenEdit);
  };

  useEffect(() => {
    const getWorkOrder = async () => {
      const { data } = await authRequest.get(`/admin/work_orders`);
      setWorkOrders(data.data);
    };
    getWorkOrder();
  }, []);

  const handleDelete = async ({ id }) => {
    try {
      await authRequest.delete(`/admin/work_orders/${id}`);
      alert("Delete Success");
      navigate(0);
    } catch (error) {
      alert("Delete Failed");
    }
  };

  return (
    <div>
      <div className="text-xl mb-4">List Work Orders</div>
      <table className=" border-collapse border border-slate-400 w-full">
        <thead className="bg-slate-200">
          <tr>
            <th className="border border-slate-300">No</th>
            <th className="border border-slate-300">Name</th>
            <th className="border border-slate-300">Engineer</th>
            <th className="border border-slate-300">Status</th>
            <th className="border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {workOrders.map((workOrder, i) => (
            <tr className="text-center" key={i}>
              <td className="border border-slate-300">{i + 1}</td>
              <td className="border border-slate-300">
                {workOrder.order?.user?.name}
              </td>
              <td className="border border-slate-300">
                {workOrder.engineer?.name}
              </td>
              <td className="border border-slate-300">{workOrder.status}</td>
              <td className="flex flex-wrap items-center justify-center gap-2 py-2 px-2 text-white">
                <button
                  className="bg-blue-500 hover:bg-blue-700 rounded-lg py-2 px-3"
                  onClick={() => modalDetails({ id: workOrder.id })}
                >
                  Detail
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700  rounded-lg py-2 px-3"
                  onClick={() => modalEdit({ id: workOrder.id })}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500  hover:bg-red-700 rounded-lg py-2 px-3"
                  onClick={() => handleDelete({ id: workOrder.id })}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal Dialog Detail */}
      <DetailWorkOrder
        isOpenDetails={isOpenDetails}
        modalDetails={modalDetails}
        workOrderById={workOrderById}
      />
      {/* Modal Dialog Edit */}
      <EditWorkOrder
        isOpenEdit={isOpenEdit}
        modalEdit={modalEdit}
        workOrderById={workOrderById}
      />
    </div>
  );
};

export default WorkOrder;
