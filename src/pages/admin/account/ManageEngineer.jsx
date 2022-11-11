import React, { useState } from "react";
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authRequest } from "../../../utils/axiosInstance";

const ManageEngineer = () => {
  const navigate = useNavigate();
  const [engineers, setEngineers] = useState([]);

  useEffect(() => {
    const getEngineer = async () => {
      const { data } = await authRequest.get("/engineers");
      setEngineers(data.data);
    };
    getEngineer();
  }, []);

  const handleDelete = async ({ id }) => {
    try {
      await authRequest.delete(`/engineers/${id}`);
      alert("Success Delete");
      navigate(0);
    } catch (error) {
      alert("Failed Delete");
    }
  };

  return (
    <div>
      <div className="text-xl">Manage Engineer</div>
      <Link to={"new"}>
        <button className="my-4 bg-primary text-white py-2 px-3 rounded-lg hover:bg-slate-800">
          Create A New Engineer
        </button>
      </Link>
      <table className="table-auto border-collapse border border-slate-400 w-full">
        <thead className="bg-slate-200">
          <tr>
            <th className="border border-slate-300">No</th>
            <th className="border border-slate-300">Name</th>
            <th className="border border-slate-300">Email</th>
            <th className="border border-slate-300">Phone Number</th>
            <th className="border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {engineers.map((engineer, i) => (
            <tr className="text-center" key={i}>
              <td className="border border-slate-300">{i + 1}</td>
              <td className="border border-slate-300">{engineer.name}</td>
              <td className="border border-slate-300">{engineer.email}</td>
              <td className="border border-slate-300">
                {engineer.phone_number}
              </td>
              <td className="grid grid-cols-1 gap-2 py-2 px-2 text-white">
                <button
                  className="bg-red-500  hover:bg-red-700 rounded-lg py-2"
                  onClick={() => handleDelete({ id: engineer.id })}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageEngineer;
