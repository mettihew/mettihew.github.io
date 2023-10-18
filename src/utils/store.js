import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice.js";
import productSlice from "../features/product/productSlice.js";
import orderSlice from "../features/order/orderSlice.js";

const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    order: orderSlice,
  },
});

export default store;
