import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistCurrency = { key: "currency", storage };

export const CurrencySlice = createSlice({
  name: "Currency",
  initialState: {
    currency: "USD",
    symbol: "$",
  },
  reducers: {
    handleChangeCurrency(state, action) {
      state.currency = action.payload;
    },
    handleChangeCurrencySymbol(state, action) {
      state.symbol = action.payload;
    },
  },
});
export const persistedCurrencyReducer = persistReducer(
  persistCurrency,
  CurrencySlice.reducer
);
export const { handleChangeCurrency, handleChangeCurrencySymbol } =
  CurrencySlice.actions;
