import { Field, Form, Formik } from "formik";
import CurrencyInput from "react-currency-input-field";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ErrorFormMessage from "../../../components/general/ErrorFormMessage";
import { formatIDR } from "../../../components/general/FormatIDR";
import Modal from "../../../components/general/Modal";
import { InvoiceSchema } from "../../../components/validation/InvoiceSchema";
import { authRequest } from "../../../utils/axiosInstance";

export default function EditInvoice({
  isOpenEdit,
  modalEdit,
  invoiceById = "",
}) {
  const { order, totalPrice, payment_status, id } = invoiceById;
  const navigate = useNavigate();
  const payments = [
    { name: "success" },
    { name: "pending" },
    { name: "failed" },
  ];
  return (
    <Modal
      isOpen={isOpenEdit}
      handleModal={modalEdit}
      title={"Edit Order si Yono"}
      content={
        <div>
          <div className="text-sm text-slate-400 mb-4 ">
            Edit invoice to user : {order?.user?.name}
          </div>
          <Formik
            initialValues={{
              totalPrice: totalPrice,
              payment_status: payment_status,
            }}
            validationSchema={InvoiceSchema}
            onSubmit={async (values) => {
              if (totalPrice !== values.totalPrice) {
                values = {
                  ...values,
                  totalPrice: formatIDR({ value: values.totalPrice }),
                };
              }
              console.log(id);
              try {
                await authRequest.put(`/invoices/${id}`, values);
                alert("Invoice Updated");
                navigate(0);
              } catch (error) {
                alert(error);
                navigate(0);
              }
            }}
          >
            {({ handleSubmit, errors, touched, setFieldValue, values }) => (
              <Form
                className="p-4 rounded-xl bg-slate-100"
                onSubmit={handleSubmit}
              >
                {/* Total Price */}
                <div className="mb-4">
                  <span>Total Price</span>
                  <CurrencyInput
                    type={"text"}
                    name="totalPrice"
                    placeholder={totalPrice}
                    intlConfig={{ locale: "id-ID", currency: "IDR" }}
                    onValueChange={(value) =>
                      setFieldValue("totalPrice", value)
                    }
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
                    value={values.payment_status}
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
                  Update Invoice
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
