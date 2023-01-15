/** @format */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { useEffect } from "react";
import { authRequest } from "../utils/axiosInstance";
import * as Yup from "yup";
import ErrorFormMessage from "../components/general/ErrorFormMessage";

export default function Order() {
   const [spareparts, setSpareparts] = useState([]);
   const navigate = useNavigate();

   const listOrderTypes = [{ name: "Pemasangan AC Baru" }, { name: "Ganti sparepart" }, { name: "service AC" }];

   useEffect(() => {
      const getSparepart = async () => {
         const { data } = await authRequest.get("/admin/sparepart");
         setSpareparts(data.data);
      };
      getSparepart();
   }, []);
   return (
      <Formik
         initialValues={{
            order_type: "",
            sparepartId: "",
            description: "",
         }}
         validationSchema={Yup.object().shape({
            order_type: Yup.string().required("Pilih salah satu pemesanan"),
         })}
         onSubmit={async (values) => {
            try {
               const { data } = await authRequest.post("/orders", values);
               alert("Berhasil membuat order");
               navigate(`/order/${data.data.id}/success`, { replace: "/" });
            } catch (error) {
               if (error.response.status === 403) {
                  alert("Pesanan anda sebelumnya harus diselaikan atau hubungi admin  untuk membatalkan pesanan sebelumnya");
               }
            }
         }}
      >
         {({ handleSubmit, errors, touched }) => (
            <div>
               <div className="flex flex-col  items-center text-primary">
                  <div className="bg-white rounded-lg shadow-lg  w-1/2">
                     <div className="p-6  tracking-wider">
                        <div className=" text-2xl  font-medium mb-4 flex gap-2 antialiased   ">
                           <span className="underline"> Buat Pesanan Kamu</span>
                           <span> &#128513;</span>
                        </div>
                        <div className="text-xs text-slate-400 mb-3">* Data diri sesuai dengan akun</div>
                        <Form onSubmit={handleSubmit}>
                           {/* Order type */}
                           <div className="mb-4">
                              <label htmlFor="order_type">Apa yang kamu inginkan?</label>
                              <Field as="select" name="order_type" className="w-full rounded-lg mt-2">
                                 <option value="" disabled>
                                    Pilih Jenis Pemesanan
                                 </option>
                                 {listOrderTypes.map((orderType, i) => (
                                    <option value={orderType.name} key={i}>
                                       {orderType.name}
                                    </option>
                                 ))}
                              </Field>
                              {errors.order_type && touched.order_type ? <ErrorFormMessage errors={errors.order_type} /> : null}
                           </div>
                           {/* Sparepart */}
                           <div className="mb-4">
                              <label htmlFor="order_type">Pergantian sparepart</label>
                              <Field as="select" name="sparepartId" className="w-full rounded-lg mt-2">
                                 <option value="" disabled>
                                    Pilih Sparepart
                                 </option>
                                 <option value="">Tidak Ada</option>
                                 {spareparts.map((sparepart, i) => (
                                    <option value={sparepart.id} key={i}>
                                       {sparepart.name}
                                    </option>
                                 ))}
                              </Field>
                              <span className="text-sm text-slate-400">* Opsional</span>
                           </div>
                           {/* description */}
                           <div className="mb-4">
                              <label htmlFor="description">Pesan Tambahan</label>
                              <Field as="textarea" name="description" className="w-full rounded-lg mt-1" placeholder="Pesan tambahan "></Field>
                           </div>
                           {/* Button */}
                           <button type="submit" className="bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-slate-700">
                              Kirim Permintaan
                           </button>
                        </Form>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </Formik>
   );
}
