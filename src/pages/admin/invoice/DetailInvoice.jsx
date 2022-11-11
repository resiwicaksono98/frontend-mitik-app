import Modal from "../../../components/general/Modal";

export default function DetailInvoice({
  isOpenDetails,
  modalDetails,
  invoiceById = "",
}) {
  const { order, payment_status, totalPrice } = invoiceById;
  return (
    <Modal
      isOpen={isOpenDetails}
      handleModal={modalDetails}
      title={`Detail Invoice ${order?.user?.name}`}
      content={
        <div className="my-6">
          <div className="grid grid-cols-2 gap-2 antialiased">
            {/* Name */}
            <div className="">Name</div>
            <div> : {order?.user?.name} </div>
            {/* Email */}
            <div className="">Email</div>
            <div> : {order?.user?.email} </div>
            {/* Phone Number */}
            <div className="">Phone Number </div>
            <div> : {order?.user?.phone_number}</div>
            {/* Order Type */}
            <div className="">Order Type</div>
            <div> : {order?.order_type}</div>
            {/* Adress */}
            <div className="">Address</div>
            <div> : {order?.user?.address} </div>
            {/* Sparepart */}
            <div className="">Sparepart </div>
            <div> : {order?.sparepart?.name}</div>
            {/* Total Price */}
            <div>Total Price</div>
            <div> : {totalPrice}</div>
            {/*  Payment Status */}
            <div className="">Payment Status</div>
            <div>
              :
              <span className="bg-green-500 py-1 mx-1 px-3 text-white rounded-lg">
                {payment_status}
              </span>
            </div>
          </div>
        </div>
      }
      button={"Tutup"}
    />
  );
}
