import { Formik, Form, Field } from "formik";
import CurrencyInput from "react-currency-input-field";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BackNavigate from "../../../components/admin/BackNavigate";
import ErrorFormMessage from "../../../components/general/ErrorFormMessage";
import { formatIDR } from "../../../components/general/FormatIDR";
import { InvoiceSchema } from "../../../components/validation/InvoiceSchema";
import { authRequest } from "../../../utils/axiosInstance";

export default function CreateInvoice() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();
  const payments = [
    { name: "success" },
    { name: "pending" },
    { name: "failed" },
  ];
  return (
    <div>
      <BackNavigate to={"/admin/order"}>
        <div className="my-4 text-xl font-semibold">Create A New Invoice</div>
      </BackNavigate>
      <div className="text-sm text-slate-400 mb-4 ">
        Create invoice to user : {state?.username}
      </div>
      <Formik
        initialValues={{
          totalPrice: "",
          payment_status: "",
        }}
        validationSchema={InvoiceSchema}
        onSubmit={async (values) => {
          values = {
            ...values,
            totalPrice: formatIDR({ value: values.totalPrice }),
          };
          try {
            await authRequest.post(`/invoices/${id}`, values);
            alert("Invoice Created");
            navigate("/admin/invoice");
          } catch (error) {
            alert(error);
            // navigate("/admin/order");
          }
        }}
      >
        {({ handleSubmit, errors, touched, setFieldValue }) => (
          <Form className="p-4 rounded-xl bg-slate-100" onSubmit={handleSubmit}>
            {/* Total Price */}
            <div className="mb-4">
              <label htmlFor="totalPrice">Total Price</label>
              <CurrencyInput
                name="totalPrice"
                placeholder="Please enter a number"
                intlConfig={{ locale: "id-ID", currency: "IDR" }}
                onValueChange={(value) => setFieldValue("totalPrice", value)}
                className="w-full rounded-lg mt-2"
              />
              {errors.totalPrice && touched.totalPrice ? (
                <ErrorFormMessage errors={errors.totalPrice} />
              ) : null}
            </div>
            {/* Payment Status */}
            <div className="mb-4">
              <label htmlFor="peyment_status">Payment Status</label>
              <Field
                as="select"
                name="payment_status"
                className="w-full rounded-lg mt-2"
              >
                <option disabled value="">
                  Choose One Order Type
                </option>
                {payments.map((payment, i) => (
                  <option value={payment.name} key={i}>
                    {payment.name}
                  </option>
                ))}
              </Field>
              {errors.payment_status && touched.payment_status ? (
                <ErrorFormMessage errors={errors.payment_status} />
              ) : null}
            </div>
            {/* Button submit */}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-slate-700"
            >
              Create Invoice
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
