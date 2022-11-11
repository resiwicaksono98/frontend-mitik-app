import { Formik, Form, Field } from "formik";
import React from "react";
import CurrencyInput from "react-currency-input-field";
import { useNavigate } from "react-router-dom";
import ErrorFormMessage from "../../../components/general/ErrorFormMessage";
import Modal from "../../../components/general/Modal";
import { SparepartSchema } from "../../../components/validation/SparepartSchema";
import { authRequest } from "../../../utils/axiosInstance";

export default function EditSparepart({
  isOpenEdit,
  modalEdit,
  sparepartById = "",
}) {
  const navigate = useNavigate();
  const { name, price, id } = sparepartById;
  return (
    <Modal
      isOpen={isOpenEdit}
      handleModal={modalEdit}
      title={`Edit Sparepart ${name}`}
      content={
        <div>
          <div className="text-sm text-slate-400 mb-4 ">
            Edit invoice to user : {name}
          </div>
          <Formik
            initialValues={{
              name: name,
              price: price,
            }}
            validationSchema={SparepartSchema}
            onSubmit={async (values) => {
              try {
                await authRequest.put(`/admin/sparepart/${id}`, values);
                alert("Update sparepart success");
                navigate(0);
              } catch (error) {
                // alert("Update Failed");
                // navigate(0);
              }
            }}
          >
            {({ handleSubmit, errors, touched, setFieldValue }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="mb-4">
                    <label htmlFor="name">Name</label>
                    <Field
                      name="name"
                      type="text"
                      className="w-full rounded-lg mt-2"
                      placeholder="Enter name sparepart"
                    />
                    {/* Error Message */}
                    {errors.name && touched.name ? (
                      <ErrorFormMessage errors={errors.name} />
                    ) : null}
                  </div>
                  {/* Email */}
                  <div className="mb-4">
                    <label htmlFor="price">Price</label>
                    <CurrencyInput
                      name="price"
                      placeholder={price}
                      intlConfig={{ locale: "id-ID", currency: "IDR" }}
                      onValueChange={(value) => setFieldValue("price", value)}
                      className="w-full rounded-lg mt-2"
                    />
                    {/* Error Message */}
                    {errors.price && touched.price ? (
                      <ErrorFormMessage errors={errors.price} />
                    ) : null}
                  </div>
                  {/* Button submit */}
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-slate-700"
                  >
                    Update Sparepart
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      }
      button={"Tutup"}
    />
  );
}
