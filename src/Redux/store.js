import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./reducers/orderReducer";

const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});

export default store;
