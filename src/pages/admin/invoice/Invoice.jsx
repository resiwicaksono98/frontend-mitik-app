import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../../components/general/Modal";
import { authRequest } from "../../../utils/axiosInstance";
import DetailInvoice from "./DetailInvoice";
import EditInvoice from "./EditInvoice";

const Invoice = () => {
  const navigate = useNavigate();
  let [isOpenDetails, setIsOpenDetails] = useState(false);
  let [isOpenEdit, setIsOpenEdit] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const [invoiceById, setInvoiceByid] = useState();

  const modalDetails = async ({ id }) => {
    if (id) {
      const { data } = await authRequest.get(`/invoices/${id}`);
      setInvoiceByid(data.data);
    }
    setIsOpenDetails(!isOpenDetails);
  };
  const modalEdit = async ({ id }) => {
    if (id) {
      const { data } = await authRequest.get(`/invoices/${id}`);
      setInvoiceByid(data.data);
    }
    setIsOpenEdit(!isOpenEdit);
  };

  useEffect(() => {
    const getInvoice = async () => {
      const { data } = await authRequest.get("/invoices");
      setInvoices(data.data);
    };
    getInvoice();
  }, []);

  const handleDelete = async ({ id }) => {
    try {
      await authRequest.delete(`/invoices/${id}`);
      alert("Delete success");
      navigate(0);
    } catch (error) {
      alert("Delete Failed");
    }
  };

  return (
    <div>
      <div className="text-xl mb-4">Invoice List</div>
      <table className="table-auto border-collapse border border-slate-400 w-full">
        <thead className="bg-slate-200">
          <tr>
            <th className="border border-slate-300">No</th>
            <th className="border border-slate-300">Order ID</th>
            <th className="border border-slate-300">Name</th>
            <th className="border border-slate-300">Total Price</th>
            <th className="border border-slate-300">Payment Status</th>
            <th className="border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, i) => (
            <tr className="text-center" key={invoice.id}>
              <td className="border border-slate-300">{i + 1}</td>
              <td className="border border-slate-300">{invoice.order?.id}</td>
              <td className="border border-slate-300">
                {invoice.order?.user?.name}
              </td>
              <td className="border border-slate-300">{invoice.totalPrice}</td>
              <td className="border border-slate-300">
                {invoice.payment_status}
              </td>
              <td className="grid grid-cols-3 gap-2 py-2 px-2 text-white">
                <button
                  className="bg-blue-500 hover:bg-blue-700 rounded-lg py-2"
                  onClick={() => modalDetails({ id: invoice.id })}
                >
                  Detail
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700  rounded-lg py-2"
                  onClick={() => modalEdit({ id: invoice.id })}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500  hover:bg-red-700 rounded-lg py-2"
                  onClick={() => handleDelete({ id: invoice.id })}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal Dialog Detail */}
      <DetailInvoice
        isOpenDetails={isOpenDetails}
        modalDetails={modalDetails}
        invoiceById={invoiceById}
      />
      {/* Modal Dialog Edit */}
      <EditInvoice
        isOpenEdit={isOpenEdit}
        modalEdit={modalEdit}
        invoiceById={invoiceById}
      />
    </div>
  );
};

export default Invoice;
