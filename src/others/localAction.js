export const setProductToLS = (product) => {
  localStorage.setItem("product", JSON.stringify(product));
};
export const setProductCartToLS = (product) => {
  localStorage.setItem("productCart", JSON.stringify(product));
};
export const getProductFromLS = () => {
  const result = localStorage.getItem("product");
  return result ? JSON.parse(result) : null;
};
