import React, { useEffect, useState } from "react";
import Modal from "../../../components/general/Modal";
import { authRequest } from "../../../utils/axiosInstance";

export default function DetailOrder({
  isOpenDetails,
  modalDetails,
  orderById,
}) {
  return (
    <Modal
      isOpen={isOpenDetails}
      handleModal={modalDetails}
      title={`Detail Order ${orderById?.user?.name}`}
      content={
        <div className="my-6">
          <div className="grid grid-cols-2 gap-2 antialiased">
            {/* Name */}
            <div className="">Name</div>
            <div> : {orderById?.user?.name} </div>
            {/* Email */}
            <div className="">Email</div>
            <div> : {orderById?.user?.email} </div>
            {/* Phone Number */}
            <div className="">Phone Number </div>
            <div> : {orderById?.user?.phone_number}</div>
            {/* Order Type */}
            <div className="">Order Type</div>
            <div> : {orderById?.order_type}</div>
            {/* Work Order */}
            <div className="">Start Date Work Order</div>
            <div>
              :{" "}
              {!orderById?.workOrder?.start_date ? (
                <span className="underline">"Not Yet"</span>
              ) : (
                orderById?.workOrder?.start_date
              )}
            </div>
            {/* Adress */}
            <div className="">Address</div>
            <div> : {orderById?.user?.address} </div>
            {/* Status */}
            <div className="">Status</div>
            <div>
              :
              <span className="bg-green-500 py-1 px-3 text-white rounded-lg">
                {orderById?.status}
              </span>
            </div>
            {/* Description */}
            <div className="">Description</div>
            <div> : {orderById?.description}</div>
          </div>
        </div>
      }
      button={"Tutup"}
    />
  );
}
