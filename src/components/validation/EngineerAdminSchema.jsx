import * as Yup from "yup";

export const EngineerAdminSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("email not valid"),
  password: Yup.string().required("Password is required"),
  phone_number: Yup.string().required("Phone number is required"),
});
