import { Formik, Form, Field } from "formik";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DateTimePicker from "react-datetime-picker";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BackNavigate from "../../../components/admin/BackNavigate";
import ErrorFormMessage from "../../../components/general/ErrorFormMessage";
import { WorkOrderSchema } from "../../../components/validation/WorkOrderSchema";
import { authRequest } from "../../../utils/axiosInstance";

export default function CreateWorkOrder() {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [engineers, setEngineers] = useState([]);

  const status = [{ name: "pending" }, { name: "approve" }, { name: "failed" }];

  useEffect(() => {
    const getEngineer = async () => {
      const { data } = await authRequest.get("/engineers");
      setEngineers(data.data);
    };
    getEngineer();
  }, []);
  return (
    <div>
      <BackNavigate to={"/admin/order"}>
        <div className="my-4 text-xl font-semibold">Create Work Order</div>
      </BackNavigate>
      <div className="my-4 text-sm ">User: {state?.username}</div>
      {/* Formik */}
      <Formik
        initialValues={{
          engineerId: "",
          status: "",
          start_date: "",
          detail: "",
        }}
        validationSchema={WorkOrderSchema}
        onSubmit={async (values) => {
          try {
            await authRequest.post(`/admin/work_orders/${id}`, values);
            alert("Success Create Order");
            navigate("/admin/work_order");
          } catch (error) {
            alert("Error Create Order");
            navigate(0);
          }
        }}
      >
        {({ handleSubmit, errors, touched, setFieldValue, values }) => (
          <Form className="p-4 rounded-xl bg-slate-100" onSubmit={handleSubmit}>
            {/* Engineer */}
            <div className="mb-4">
              <label htmlFor="engineerId">Engineer</label>
              <Field
                as="select"
                name="engineerId"
                className="w-full rounded-lg mt-2"
              >
                <option disabled value="">
                  Choose One Engineer
                </option>
                {engineers.map((engineer, i) => (
                  <option value={engineer.id} key={i}>
                    {engineer.name}
                  </option>
                ))}
              </Field>
              {/* Erorr Message */}
              {errors.engineerId && touched.engineerId ? (
                <ErrorFormMessage errors={errors.engineerId} />
              ) : null}
            </div>
            {/* Status */}
            <div className="mb-4">
              <label htmlFor="satatus">Status</label>
              <Field
                as="select"
                name="status"
                className="w-full rounded-lg mt-2"
              >
                <option value="" disabled>
                  Choose One status
                </option>
                {status.map((stat, i) => (
                  <option value={stat.name} key={i}>
                    {stat.name}
                  </option>
                ))}
              </Field>
              {/* Erorr Message */}
              {errors.status && touched.status ? (
                <ErrorFormMessage errors={errors.status} />
              ) : null}
            </div>
            {/* Start Date */}
            <div className="mb-4">
              <label htmlFor="start_date">Start Date</label>
              <DateTimePicker
                name="start_date"
                className="w-full rounded-lg mt-2"
                locale="id-ID"
                onChange={(value) => setFieldValue("start_date", value)}
                value={values.start_date}
              />
              {/* Erorr Message */}
              {errors.start_date && touched.start_date ? (
                <ErrorFormMessage errors={errors.start_date} />
              ) : null}
            </div>
            {/* Detail */}
            <div className="mb-4">
              <label htmlFor="detail">Detail</label>
              <Field
                as="textarea"
                name="detail"
                placeholder="Additional information"
                className="w-full rounded-lg mt-1"
              ></Field>
            </div>
            {/* Button submit */}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-slate-700"
            >
              Create Work Order
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
