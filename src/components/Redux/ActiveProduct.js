import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "Product",
  initialState: { activeProduct: {} },
  reducers: {
    handleSetActiveProduct(state, action) {
      state.activeProduct = action.payload;
    },
  },
});

export const { handleSetActiveProduct } = ProductSlice.actions;
