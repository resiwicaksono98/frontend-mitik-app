import * as Yup from "yup";

export const WorkOrderSchema = Yup.object().shape({
  engineerId: Yup.string().required("Enginneer is required"),
  status: Yup.string().required("Please select a status"),
  start_date: Yup.date().required("Start date is required"),
});
