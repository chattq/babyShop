export const formatMoney = (x) => {
  return x?.toLocaleString("en-US", { style: "currency", currency: "USD" });
};
