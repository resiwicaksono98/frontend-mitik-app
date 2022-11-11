import React, { useEffect, useState } from "react";
import BackNavigate from "../../../components/admin/BackNavigate";
import { Formik, Form, Field } from "formik";
import { OrderSchema } from "../../../components/validation/OrderSchema";
import { authRequest } from "../../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import ErrorFormMessage from "../../../components/general/ErrorFormMessage";

export default function CreateOrder() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [spareparts, setSpareparts] = useState([]);

  const orderTypes = [
    { name: "Pemasangan AC Window" },
    { name: "Perbaikan AC" },
    { name: "Pergantian Sparepart AC" },
  ];

  useEffect(() => {
    const getUser = async () => {
      const { data } = await authRequest.get("/admin/users");
      setUsers(data.data);
    };
    const getSparepart = async () => {
      const { data } = await authRequest.get("/admin/sparepart");
      setSpareparts(data.data);
    };
    getUser();
    getSparepart();
  }, []);
  return (
    <div>
      <BackNavigate to={"/admin/order"}>
        <div className="my-4 text-xl font-semibold">Create A New Order</div>
      </BackNavigate>
      <Formik
        initialValues={{
          userId: "",
          order_type: "",
          description: "",
          sparepartId: "",
        }}
        validationSchema={OrderSchema}
        onSubmit={(values) => {
          const saveOrder = async () => {
            await authRequest
              .post("/admin/orders", values)
              .then(() => {
                alert("Order Saved");
                navigate("/admin/order");
              })
              .catch((err) => console.log(err));
          };
          saveOrder();
        }}
      >
        {({ handleSubmit, handleChange, errors, touched }) => {
          return (
            <Form
              className="p-4 rounded-xl bg-slate-100"
              onSubmit={handleSubmit}
            >
              {/* User */}
              <div className="mb-4">
                <label htmlFor="user">User</label>
                <Field
                  as="select"
                  name="userId"
                  className="w-full rounded-lg mt-2"
                >
                  <option disabled value="">
                    Choose One User
                  </option>
                  {users.map((user) => (
                    <option value={user.id} key={user.id}>
                      {user.name}
                    </option>
                  ))}
                </Field>
                {/* Erorr Message */}
                {errors.userId && touched.userId ? (
                  <ErrorFormMessage errors={errors.userId} />
                ) : null}
              </div>
              {/* Order Type */}
              <div className="mb-4">
                <label htmlFor="order_type">Order Type</label>
                <Field
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
              {/* Description */}
              <div className="mb-4">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  onChange={handleChange}
                  className="w-full rounded-lg mt-1"
                ></textarea>
              </div>
              {/* Button submit */}
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-slate-700"
              >
                Create Order
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
