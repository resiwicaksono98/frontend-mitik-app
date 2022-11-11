import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authRequest } from "../../../utils/axiosInstance";
import DetailOrder from "./DetailOrder";
import EditOrder from "./EditOrder";

const OrderList = () => {
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [orders, setOrders] = useState([]);
  const [orderById, setOrderById] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      const { data } = await authRequest.get("/admin/orders");
      setOrders(data.data);
    };
    getOrders();
  }, []);

  const modalDetails = async ({ id }) => {
    if (id) {
      const { data } = await authRequest.get(`/admin/orders/${id}`);
      setOrderById(data.data);
    }
    setIsOpenDetails(!isOpenDetails);
  };
  const modalEdit = async ({ id }) => {
    // Get Data By ID
    if (id) {
      const { data } = await authRequest.get(`/admin/orders/${id}`);
      setOrderById(data.data);
    }
    setIsOpenEdit(!isOpenEdit);
  };

  const handleDelete = ({ id }) => {
    const deleteOrder = async () => {
      await authRequest.delete(`/admin/orders/${id}`);
      alert("Delete Success");
      navigate(0);
    };
    deleteOrder();
  };
  return (
    <div>
      <div className="text-xl">Order List</div>
      <Link to={"/admin/order/new"}>
        <button className="my-4 bg-primary text-white py-2 px-3 rounded-lg hover:bg-slate-800">
          Create A New Order
        </button>
      </Link>
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
          {orders.map((order, i) => (
            <tr className="text-center" key={order.id}>
              <td className="border border-slate-300">{i + 1}</td>
              <td className="border border-slate-300">{order.user?.name}</td>
              <td className="border border-slate-300">{order.order_type}</td>
              <td className="border border-slate-300">{order.status}</td>
              <td className="grid grid-cols-5 gap-2 py-2 px-2 text-white">
                {/* Work orders */}
                <Link
                  to={!order.workOrder ? `/admin/work_order/${order.id}` : ""}
                  state={{ username: order.user?.name }}
                  onClick={() =>
                    order.workOrder &&
                    alert("This order already made work order")
                  }
                  className={`${
                    order.workOrder ? "bg-slate-200" : "bg-primary"
                  }  hover:bg-slate-800 rounded-lg py-2`}
                >
                  <button> Work Order</button>
                </Link>
                {/* Invoice */}
                <Link
                  to={!order.invoice ? `/admin/invoice/${order.id}` : ""}
                  state={{ username: order.user?.name }}
                  onClick={() =>
                    order.invoice && alert("This order already made invoice")
                  }
                  className={`${
                    order.invoice ? "bg-slate-200" : "bg-primary"
                  }  hover:bg-slate-800 rounded-lg py-2 flex justify-center`}
                >
                  <button> Invoice</button>
                </Link>
                {/* Detail */}
                <button
                  className="bg-blue-500 hover:bg-blue-700 rounded-lg py-2"
                  onClick={() => modalDetails({ id: order.id })}
                >
                  Detail
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700  rounded-lg py-2"
                  onClick={() => modalEdit({ id: order.id })}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500  hover:bg-red-700 rounded-lg py-2"
                  onClick={() => handleDelete({ id: order.id })}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal Dialog Detail */}
      <DetailOrder
        isOpenDetails={isOpenDetails}
        modalDetails={modalDetails}
        orderById={orderById}
      />
      {/* Modal Dialog Edit */}
      <EditOrder
        isOpenEdit={isOpenEdit}
        modalEdit={modalEdit}
        orderById={orderById}
      />
    </div>
  );
};

export default OrderList;
