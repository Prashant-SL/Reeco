import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProductStatus: (state, action) => {
      const { productId, status } = action.payload;
      console.log("Updating product status:", productId, status);
      const product = state.products.find((p) => p.id === productId);
      if (product) {
        product.status = status;
      }
    },
    approveAllProducts: (state) => {
      state.products.forEach((product) => {
        product.status = "Approved";
      });
    },
    resetOrder: (state) => {
      state.products = [];
    },
  },
});

export const {
  addProduct,
  updateProductStatus,
  approveAllProducts,
  resetOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
