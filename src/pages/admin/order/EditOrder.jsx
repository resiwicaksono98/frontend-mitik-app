import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/general/Modal";
import { authRequest } from "../../../utils/axiosInstance";
import { Formik, Form, Field } from "formik";
import ErrorFormMessage from "../../../components/general/ErrorFormMessage";

export default function EditOrder({ isOpenEdit, modalEdit, orderById }) {
  const navigate = useNavigate();
  const [spareparts, setSpareparts] = useState([]);

  const orderTypes = [
    { name: "Pemasangan AC Baru" },
    { name: "Perbaikan AC" },
    { name: "Pergantian Sparepart AC" },
  ];
  const status = [{ name: "success" }, { name: "pending" }, { name: "failed" }];

  useEffect(() => {
    const getSparepart = async () => {
      const { data } = await authRequest.get("/admin/sparepart");
      setSpareparts(data.data);
    };
    getSparepart();
  }, []);
  return (
    <Modal
      isOpen={isOpenEdit}
      handleModal={modalEdit}
      title={"Edit Order si Yono"}
      content={
        <Formik
          initialValues={{
            order_type: orderById ? orderById.order_type : "",
            description: orderById ? orderById.description : "",
            sparepartId: orderById?.sparepart ? orderById?.sparepart?.id : "",
            status: orderById ? orderById.status : "",
          }}
          onSubmit={(values) => {
            const updateOrder = async () => {
              await authRequest
                .put(`/admin/orders/${orderById.id}`, values)
                .then(() => {
                  alert("Order Updated");
                  navigate(0);
                })
                .catch((err) => console.log(err));
            };
            updateOrder();
          }}
        >
          {({ handleSubmit, handleChange, errors, touched, values }) => {
            return (
              <Form
                className="p-4 rounded-xl bg-slate-100"
                onSubmit={handleSubmit}
              >
                {/* Order Type */}
                <div className="mb-4">
                  <label htmlFor="order_type">Order Type</label>
                  <Field
                    value={values.order_type}
                    as="select"
                    name="order_type"
                    className="w-full rounded-lg mt-2"
                  >
                    <option disabled value="">
                      Choose One Order Type
                    </option>
                    {orderTypes.map((orderType, i) => (
                      <option value={orderType.name} key={i}>
                        {orderType.name}
                      </option>
                    ))}
                  </Field>
                  {/* Erorr Message */}
                  {errors.order_type && touched.order_type ? (
                    <ErrorFormMessage errors={errors.order_type} />
                  ) : null}
                </div>
                {/* Sparepart */}
                <div className="mb-4">
                  <label htmlFor="sparepart">Sparepart</label>
                  <Field
                    value={values.sparepartId}
                    as="select"
                    name="sparepartId"
                    className="w-full rounded-lg mt-2"
                  >
                    <option disabled value="">
                      Choose One Sparepart
                    </option>
                    {spareparts.map((sparepart) => (
                      <option value={sparepart.id} key={sparepart.id}>
                        {sparepart.name}
                      </option>
                    ))}
                  </Field>
                </div>
                {/* Status */}
                <div className="mb-4">
                  <label htmlFor="status">Status</label>
                  <Field
                    value={values.status}
                    as="select"
                    name="status"
                    className="w-full rounded-lg mt-2"
                  >
                    <option disabled value="">
                      Choose One Sparepart
                    </option>
                    {status.map((stat, i) => (
                      <option value={stat.name} key={i}>
                        {stat.name}
                      </option>
                    ))}
                  </Field>
                </div>
                {/* Description */}
                <div className="mb-4">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    onChange={handleChange}
                    value={values.description}
                    className="w-full rounded-lg mt-1"
                  ></textarea>
                </div>
                {/* Button submit */}
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-slate-700"
                >
                  Update Order
                </button>
              </Form>
            );
          }}
        </Formik>
      }
      button={"Tutup"}
    />
  );
}
