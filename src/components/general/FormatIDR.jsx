import { formatValue } from "react-currency-input-field";

export const formatIDR = ({ value }) =>
  formatValue({
    value: value,
    intlConfig: { locale: "id-ID", currency: "IDR" },
  });
