"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persist = exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var CartSlice_1 = require("./CartSlice");
var CurrencySlice_1 = require("./CurrencySlice");
var redux_persist_1 = require("redux-persist");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        cart: CartSlice_1.persistedContactsReducer,
        currency: CurrencySlice_1.persistedCurrencyReducer,
    },
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [redux_persist_1.FLUSH, redux_persist_1.REHYDRATE, redux_persist_1.PAUSE, redux_persist_1.PERSIST, redux_persist_1.PURGE, redux_persist_1.REGISTER],
            },
        });
    },
});
exports.persist = (0, redux_persist_1.persistStore)(exports.store);
