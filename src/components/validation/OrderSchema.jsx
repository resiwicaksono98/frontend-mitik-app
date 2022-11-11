import React from "react";
import * as Yup from "yup";

export const OrderSchema = Yup.object().shape({
  userId: Yup.string().required("Please select a user"),
  order_type: Yup.string().required("Please select a order type"),
});
