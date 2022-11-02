import React, { useState } from "react";
import Modal from "../components/general/Modal";

export default function DashboardUser() {
  let [isOpenDetails, setIsOpenDetails] = useState(false);

  const modalDetails = () => setIsOpenDetails(!isOpenDetails);
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
              <tr className="text-center hover:bg-slate-100  cursor-pointer">
                <td>1</td>
                <td>Pemasangan AC Window</td>
                <td>01 November 2022</td>
                <td>Jl Pahlawan 69 Tangerang Selatan</td>
                <td>Success</td>
                <td className="bg-white">
                  <button
                    className="bg-green-500 hover:bg-green-600 py-2 px-3 rounded-lg text-white"
                    onClick={modalDetails}
                  >
                    {"Detail"}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal */}
      <Modal
        isOpen={isOpenDetails}
        handleModal={modalDetails}
        title={"Detail Order Yono"}
        content={"lorem ipsum"}
        button={"Tutup"}
      />
    </div>
  );
}
