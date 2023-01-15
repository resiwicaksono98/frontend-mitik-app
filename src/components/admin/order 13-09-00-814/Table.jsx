import React from "react";
import { Link } from "react-router-dom";

export default function Table() {
  return (
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
  );
}
