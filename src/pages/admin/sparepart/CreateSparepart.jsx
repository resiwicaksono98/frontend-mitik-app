import { Formik, Form, Field } from "formik";
import React from "react";
import CurrencyInput from "react-currency-input-field";
import { useNavigate } from "react-router-dom";
import BackNavigate from "../../../components/admin/BackNavigate";
import ErrorFormMessage from "../../../components/general/ErrorFormMessage";
import { SparepartSchema } from "../../../components/validation/SparepartSchema";
import { authRequest } from "../../../utils/axiosInstance";

export default function CreateSparepart() {
  const navigate = useNavigate();
  return (
    <div>
      <BackNavigate to={"/admin/sparepart"}>
        <div className="my-4 text-xl font-semibold">Create A New Order</div>
      </BackNavigate>
      <Formik
        initialValues={{
          name: "",
          price: "",
        }}
        validationSchema={SparepartSchema}
        onSubmit={async (values) => {
          try {
            await authRequest.post(`/admin/sparepart`, values);
            alert("Create sparepart success");
            navigate("/admin/sparepart");
          } catch (error) {
            alert("Create Failed");
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
                  placeholder="Please enter a number"
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
                Create Sparepart
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
