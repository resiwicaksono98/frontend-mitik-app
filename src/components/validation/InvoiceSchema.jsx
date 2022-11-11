import * as Yup from "yup";

const regexIDR = /(\d)(?=(\d\d\d)+(?!\d))/g;
export const InvoiceSchema = Yup.object().shape({
  totalPrice: Yup.string().required("Total price is required"),
  payment_status: Yup.string().required("Please select a payment status"),
});
