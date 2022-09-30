"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleChangeCurrencySymbol = exports.handleChangeCurrency = exports.persistedCurrencyReducer = exports.CurrencySlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var storage_1 = __importDefault(require("redux-persist/lib/storage"));
var redux_persist_1 = require("redux-persist");
var persistCurrency = { key: "currency", storage: storage_1.default };
exports.CurrencySlice = (0, toolkit_1.createSlice)({
    name: "Currency",
    initialState: {
        currency: "USD",
        symbol: "$",
    },
    reducers: {
        handleChangeCurrency: function (state, action) {
            state.currency = action.payload;
        },
        handleChangeCurrencySymbol: function (state, action) {
            state.symbol = action.payload;
        },
    },
});
exports.persistedCurrencyReducer = (0, redux_persist_1.persistReducer)(persistCurrency, exports.CurrencySlice.reducer);
exports.handleChangeCurrency = (_a = exports.CurrencySlice.actions, _a.handleChangeCurrency), exports.handleChangeCurrencySymbol = _a.handleChangeCurrencySymbol;
