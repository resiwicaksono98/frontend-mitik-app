import React from "react";
import BackNavigate from "../../../components/admin/BackNavigate";
import { Formik, Form, Field } from "formik";
import { UserSchema } from "../../../components/validation/UserSchema";
import ErrorFormMessage from "../../../components/general/ErrorFormMessage";
import { authRequest } from "../../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const navigate = useNavigate();
  return (
    <div>
      <BackNavigate to={"/admin/users"}>
        <div className="my-4 text-xl font-semibold">Create A New User</div>
      </BackNavigate>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          phone_number: "",
          address: "",
        }}
        validationSchema={UserSchema}
        onSubmit={async (values) => {
          try {
            await authRequest.post(`/register`, values);
            alert("Success Create");
            navigate("/admin/users");
          } catch (error) {
            alert("Failed Create");
            navigate(0);
          }
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form className="p-4 rounded-xl bg-slate-100" onScroll={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name">Fullname</label>
              <Field
                type="text"
                name="name"
                className="w-full rounded-lg mt-2"
                placeholder="Enter a fullname"
              />
              {/* Error Message */}
              {errors.name && touched.name ? (
                <ErrorFormMessage errors={errors.name} />
              ) : null}
            </div>
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <Field
                type="text"
                name="email"
                className="w-full rounded-lg mt-2"
                placeholder="Enter a email"
              />
              {/* Error Message */}
              {errors.email && touched.email ? (
                <ErrorFormMessage errors={errors.email} />
              ) : null}
            </div>
            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full rounded-lg mt-2"
                placeholder="Enter a email"
              />
              {/* Error Message */}
              {errors.password && touched.password ? (
                <ErrorFormMessage errors={errors.password} />
              ) : null}
            </div>
            {/* Phone Number */}
            <div className="mb-4">
              <label htmlFor="phone_number">Phone Number</label>
              <Field
                type="text"
                name="phone_number"
                className="w-full rounded-lg mt-2"
                placeholder="Enter a phone number"
              />
              {/* Error Message */}
              {errors.phone_number && touched.phone_number ? (
                <ErrorFormMessage errors={errors.phone_number} />
              ) : null}
            </div>
            {/* Address */}
            <div className="mb-4">
              <label htmlFor="address">Address</label>
              <Field
                as="textarea"
                name="address"
                className="w-full rounded-lg mt-1"
                placeholder="Enter a address"
              ></Field>
              {/* Error Message */}
              {errors.address && touched.address ? (
                <ErrorFormMessage errors={errors.address} />
              ) : null}
            </div>
            {/* Button submit */}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-slate-700"
            >
              Create User
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
