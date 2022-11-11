import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authRequest } from "../../../utils/axiosInstance";

const ManageUser = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await authRequest.get("/admin/users");
      setUsers(data.data);
    };
    getUsers();
  }, []);

  const handleDelete = async ({ id }) => {
    try {
      await authRequest.delete(`/admin/users/${id}`);
      alert("Success Delete");
      navigate(0);
    } catch (error) {
      alert("Failed Delete");
    }
  };

  return (
    <div>
      <div className="text-xl">Manage Users</div>
      <Link to={"new"}>
        <button className="my-4 bg-primary text-white py-2 px-3 rounded-lg hover:bg-slate-800">
          Create A New User
        </button>
      </Link>
      <table className="table-auto border-collapse border border-slate-400 w-full">
        <thead className="bg-slate-200">
          <tr>
            <th className="border border-slate-300">No</th>
            <th className="border border-slate-300">Name</th>
            <th className="border border-slate-300">Email</th>
            <th className="border border-slate-300">Address</th>
            <th className="border border-slate-300">Phone Number</th>
            <th className="border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr className="text-center " key={i}>
              <td className="border border-slate-300">{i + 1}</td>
              <td className="border border-slate-300">{user.name}</td>
              <td className="border border-slate-300">{user.email}</td>
              <td className="border border-slate-300">{user.address}</td>
              <td className="border border-slate-300">{user.phone_number}</td>
              <td className="grid grid-cols-1 gap-2 py-2 px-2 text-white">
                <button
                  className="bg-red-500  hover:bg-red-700 rounded-lg py-2"
                  onClick={() => handleDelete({ id: user.id })}
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

export default ManageUser;
