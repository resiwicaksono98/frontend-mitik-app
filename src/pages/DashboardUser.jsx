import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import Modal from "../components/general/Modal";
import { authRequest } from "../utils/axiosInstance";
import OrderDetail from "./OrderDetail";

export default function DashboardUser() {
  let [isOpenDetails, setIsOpenDetails] = useState(false);
  const [orders, setOrders] = useState([]);
  const [orderById, setOrderById] = useState();

  const modalDetails = async ({ id }) => {
    if (id) {
      const { data } = await authRequest.get(`/orders/${id}`);
      setOrderById(data.data);
    }
    setIsOpenDetails(!isOpenDetails);
  };

  useEffect(() => {
    const getOrderUser = async () => {
      const { data } = await authRequest.get("/orders");
      setOrders(data.data);
    };
    getOrderUser();
  }, []);

  return (
    <div>
      <div className="text-primary">
        <div className="text-2xl text-semibold mb-5 tracking-wider">
          Dashboard
        </div>
        <div className="bg-white p-6 flex flex-col gap-4 rounded-lg">
          <div className="underline">History Pemesanan</div>
          <table className="border-separate border-spacing-2 ">
            <thead>
              <tr className=" bg-slate-300">
                <th className="">No</th>
                <th>Jenis Pesanan</th>
                <th>Pada Tanggal</th>
                <th>Alamat</th>
                <th>Status Pesanan</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr
                  className="text-center hover:bg-slate-100 cursor-pointer"
                  key={i}
                >
                  <td>{i + 1}</td>
                  <td>{order.order_type}</td>
                  <td>{moment(order.createdAt).format("D MMMM YYYY")}</td>
                  <td className="flex flex-wrap items-center justify-center py-2">
                    {order.user?.address}
                  </td>
                  <td>{order.status}</td>
                  <td className="bg-white">
                    <button
                      className="bg-green-500 hover:bg-green-600 py-2 px-3 rounded-lg text-white"
                      onClick={() => modalDetails({ id: order.id })}
                    >
                      {"Detail"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal Detail */}
      <OrderDetail
        isOpenDetails={isOpenDetails}
        modalDetails={modalDetails}
        orderById={orderById}
      />
    </div>
  );
}
