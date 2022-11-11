import { Field, Form, Formik } from "formik";
import moment from "moment";
import { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { useNavigate } from "react-router-dom";
import ErrorFormMessage from "../../../components/general/ErrorFormMessage";
import Modal from "../../../components/general/Modal";
import { authRequest } from "../../../utils/axiosInstance";

export default function EditWorkOrder({
  isOpenEdit,
  modalEdit,
  workOrderById = "",
}) {
  const navigate = useNavigate();
  const [engineers, setEngineers] = useState([]);
  const { engineer, status, start_date, detail, id } = workOrderById;

  const statusWorkOrders = [
    { name: "pending" },
    { name: "approve" },
    { name: "failed" },
  ];

  useEffect(() => {
    const getEngineer = async () => {
      const { data } = await authRequest.get("/engineers");
      setEngineers(data.data);
    };
    getEngineer();
  }, []);
  return (
    <Modal
      isOpen={isOpenEdit}
      handleModal={modalEdit}
      title={"Edit Order si Yono"}
      content={
        <div>
          <div className="my-4 text-sm ">User: Yono Bakrea</div>
          <Formik
            initialValues={{
              engineerId: engineer ? engineer.id : "",
              status: status ? status : "",
              detail: detail ? detail : "",
            }}
            onSubmit={async (values) => {
              console.log(values);
              try {
                await authRequest.put(`/admin/work_orders/${id}`, values);
                alert("Success Update Order");
                navigate(0);
              } catch (error) {
                alert("Error Update Order");
                navigate(0);
              }
            }}
          >
            {({ handleSubmit, errors, touched, setFieldValue, values }) => (
              <Form
                className="p-4 rounded-xl bg-slate-100"
                onSubmit={handleSubmit}
              >
                {/* Engineer */}
                <div className="mb-4">
                  <label htmlFor="engineerId">Engineer</label>
                  <Field
                    as="select"
                    name="engineerId"
                    className="w-full rounded-lg mt-2"
                    value={values.engineerId}
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
                    value={values.status}
                  >
                    <option value="" disabled>
                      Choose One status
                    </option>
                    {statusWorkOrders.map((stat, i) => (
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
                  <span>
                    Previous value : {moment(start_date).format("LLL")}
                  </span>
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
                  Update Work Order
                </button>
              </Form>
            )}
          </Formik>
        </div>
      }
      button={"Tutup"}
    />
  );
}
