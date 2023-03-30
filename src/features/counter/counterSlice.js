import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  listCart: [],
  value: 0,
  total: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    getProduct: (state, actions) => {
      state.product = actions.payload;
    },
    addToCart: (state, actions) => {
      const check = state.listCart.findIndex(
        (item) => item.color === actions.payload.color
      );
      if (check !== -1) {
        state.listCart[check].quantity += actions.payload.quantity;
      } else {
        state.listCart.push(actions.payload);
      }
      state.total = state.listCart.reduce(
        (sum, item) => sum + +item?.priceSale * item?.quantity,
        0
      );
    },
    updateQuantity: (state, actions) => {
      const check = state.listCart.findIndex(
        (item) => item.color === actions.payload.color
      );
      if (check !== -1) {
        state.listCart[check].quantity = actions.payload.quantity;
      }
      state.total = state.listCart.reduce(
        (sum, item) => sum + +item?.priceSale * item?.quantity,
        0
      );
    },
    removeItem(state, actions) {
      state.listCart = state.listCart.filter(
        (item) => item.color !== actions.payload.color
      );
      state.total = state.listCart.reduce(
        (sum, item) => sum + +item?.priceSale * item?.quantity,
        0
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  getProduct,
  increment,
  decrement,
  removeItem,
  updateQuantity,
} = counterSlice.actions;

export default counterSlice.reducer;
