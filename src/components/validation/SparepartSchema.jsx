import * as Yup from "yup";

export const SparepartSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  price: Yup.string().required("Price is required"),
});
