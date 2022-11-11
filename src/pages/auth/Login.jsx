import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import ErrorFormMessage from "../../components/general/ErrorFormMessage";
import * as Yup from "yup";
import { loginUser, reset } from "../../features/UserAuthSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isSuccess, isLoading, message, isError } = useSelector(
    (state) => state.authUser
  );

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={async (values) => {
        dispatch(loginUser(values));
        if (isSuccess) {
          alert("Login success");
          navigate("/");
        }
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <div className="bg-secondary h-screen">
          <div className="flex  justify-center items-center h-full">
            <div className=" mx-4 lg:mx-96 bg-white w-full rounded-xl  ">
              <div className="p-5 flex flex-col w-full items-center gap-3 text-primary tracking-wider">
                <div className=" font-bold text-3xl">Login Page</div>
                <div className="text-sm ">
                  Hey, Enter your details to get sign in to your account
                </div>
                <Form className="py-4" onSubmit={handleSubmit}>
                  {/* Error message form */}
                  {message ? (
                    <ErrorFormMessage
                      errors={message}
                      classname="mb-4 flex  justify-center items-center "
                    />
                  ) : null}
                  <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="text"
                      name="email"
                      className=" w-full mt-1 rounded-lg "
                    />
                    {/* Error message */}
                    {errors.email && touched.email ? (
                      <ErrorFormMessage errors={errors.email} />
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="w-full mt-1 rounded-lg"
                    />
                    {errors.password && touched.password ? (
                      <ErrorFormMessage errors={errors.password} />
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    className="w-full mb-4 bg-primary py-2 px-3 text-white rounded-lg hover:bg-gray-600"
                  >
                    Login
                  </button>
                  <div>
                    Dont have a acoount?{" "}
                    <Link
                      to={"/register"}
                      className="underline hover:text-gray-500"
                    >
                      Register Now
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
