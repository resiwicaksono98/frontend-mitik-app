import moment from "moment/moment";
import React from "react";
import Modal from "../../../components/general/Modal";

export default function DetailWorkOrder({
  isOpenDetails,
  modalDetails,
  workOrderById = "",
}) {
  const { order, engineer, start_date, status, admin } = workOrderById;
  return (
    <Modal
      isOpen={isOpenDetails}
      handleModal={modalDetails}
      title={`Work Order User ${order?.user?.name}`}
      content={
        <div className="my-6">
          <div className="grid grid-cols-2 gap-2 antialiased">
            {/* Admin */}
            <div className="">Admin Name</div>
            <div> : {admin?.name} </div>
            {/* Engineer */}
            <div className="">Engineer Name</div>
            <div> : {engineer?.name} </div>
            {/* Start Date */}
            <div className="">Start Date</div>
            <div> : {moment(start_date).format("LLL")} </div>
            {/* Name */}
            <div className="">Name User Order</div>
            <div> : {order?.user?.name} </div>
            {/* Email */}
            <div className="">Email</div>
            <div> : {order?.user?.email} </div>
            {/* Order Type */}
            <div className="">Order Type</div>
            <div> : {order?.order_type}</div>
            {/* Adress */}
            <div className="">Address</div>
            <div> : {order?.user?.address} </div>
            {/*  Payment Status */}
            <div className="">Status Work Order</div>
            <div>
              :
              <span className="bg-green-500 py-1 mx-1 px-3 text-white rounded-lg">
                {status}
              </span>
            </div>
          </div>
        </div>
      }
      button={"Tutup"}
    />
  );
}
