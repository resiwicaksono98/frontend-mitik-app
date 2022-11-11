import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authRequest } from "../../../utils/axiosInstance";
import EditSparepart from "./EditSparepart";

export default function SparepartList() {
  const navigate = useNavigate();
  let [isOpenDetails, setIsOpenDetails] = useState(false);
  let [isOpenEdit, setIsOpenEdit] = useState(false);
  const [spareparts, setSpareparts] = useState([]);
  const [sparepartById, setSparepartById] = useState();

  useEffect(() => {
    const getSparepart = async () => {
      const { data } = await authRequest.get("/admin/sparepart");
      setSpareparts(data.data);
    };
    getSparepart();
  }, []);

  const modalEdit = async ({ id }) => {
    if (id) {
      const { data } = await authRequest.get(`/admin/sparepart/${id}`);
      setSparepartById(data.data);
    }
    setIsOpenEdit(!isOpenEdit);
  };

  const handleDelete = async ({ id }) => {
    try {
      await authRequest.delete(`admin/sparepart/${id}`);
      alert("Delete success");
      navigate(0);
    } catch (error) {
      alert("Delete Failed");
    }
  };
  return (
    <div>
      <div className="text-xl mb-4">Sparepart List</div>
      <Link to={"/admin/sparepart/new"}>
        <button className="my-4 bg-primary text-white py-2 px-3 rounded-lg hover:bg-slate-800">
          Create A New Sparepart
        </button>
      </Link>
      <table className="table-auto border-collapse border border-slate-400 w-full">
        <thead className="bg-slate-200">
          <tr>
            <th className="border border-slate-300">No</th>
            <th className="border border-slate-300">Name</th>
            <th className="border border-slate-300">Price</th>
            <th className="border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {spareparts.map((sparepart, i) => (
            <tr className="text-center" key={i}>
              <td className="border border-slate-300">{i + 1}</td>
              <td className="border border-slate-300">{sparepart.name}</td>
              <td className="border border-slate-300">{sparepart.price}</td>
              <td className="grid grid-cols-2 gap-2 py-2 px-2 text-white">
                <button
                  className="bg-green-500 hover:bg-green-700  rounded-lg py-2"
                  onClick={() => modalEdit({ id: sparepart.id })}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500  hover:bg-red-700 rounded-lg py-2"
                  onClick={() => handleDelete({ id: sparepart.id })}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal Dialog Edit */}
      <EditSparepart
        isOpenEdit={isOpenEdit}
        modalEdit={modalEdit}
        sparepartById={sparepartById}
      />
    </div>
  );
}
