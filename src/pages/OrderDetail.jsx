import moment from "moment";
import React from "react";
import { useEffect } from "react";
import Modal from "../components/general/Modal";

export default function OrderDetail({
  isOpenDetails,
  modalDetails,
  orderById = "",
}) {
  const { user, order_type, status, createdAt, invoice, sparepart, workOrder } =
    orderById;

  return (
    <Modal
      isOpen={isOpenDetails}
      handleModal={modalDetails}
      title={`Detail Order ${user?.name}`}
      content={
        <div className="mt-4 grid grid-cols-2 gap-2 ">
          {/* user */}
          <div>Nama</div>
          <div>: {user?.name}</div>
          <div>Alamat</div>
          <div>: {user?.address}</div>
          <div>Jenis Order</div>
          {/* order */}
          <div>: {order_type}</div>
          <div>Tanggal Pengajuan</div>
          <div>: {moment(createdAt).format("d MMMM YYYY")}</div>
          <div>Status Pemesanan</div>
          <div>
            :{" "}
            <span className="bg-green-500 py-1 px-2 text-white rounded-md">
              {status}
            </span>
          </div>
          {/* Sparepart */}
          <div>Sparepart</div>
          <div>: {sparepart ? sparepart?.name : "Tidak ada"}</div>
          {/* Work order */}
          <div>Surat Jalan</div>
          <div>
            :{" "}
            <span className="bg-blue-500 py-1 px-2 rounded-md text-white">
              {workOrder ? workOrder?.status : "Belum terbuat"}
            </span>
          </div>
          {workOrder?.status === "approve" ? (
            <>
              <div>Waktu Datang Petugas</div>
              <div>: {moment(workOrder?.start_date).format("LLL")}</div>
              <div>Nama Petugas</div>
              <div>: {workOrder?.engineer?.name}</div>
              <div>No Handphone Petugas</div>
              <div>: {workOrder?.engineer?.phone_number}</div>
            </>
          ) : (
            ""
          )}
          {/* invoice */}
          <div className={`${!invoice && "hidden"}`}>Total Harga</div>
          <div className={`${!invoice && "hidden"}`}>
            : {invoice?.totalPrice}
          </div>
          <div className={`${!invoice && "hidden"}`}>Status Pembayaran</div>
          <div className={`${!invoice && "hidden"}`}>
            :{" "}
            <span className={`bg-violet-500 py-1 px-2 rounded-md text-white`}>
              {invoice?.payment_status}
            </span>
          </div>
        </div>
      }
      button={"Tutup"}
    />
  );
}
