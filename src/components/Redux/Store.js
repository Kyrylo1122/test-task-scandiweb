import { configureStore } from "@reduxjs/toolkit";
import { persistedContactsReducer } from "./CartSlice";
import { persistedCurrencyReducer } from "./CurrencySlice";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
export const store = configureStore({
  reducer: {
    cart: persistedContactsReducer,
    currency: persistedCurrencyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persist = persistStore(store);
