"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getState = exports.clearProduct = exports.addProduct = exports.CartSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.CartSlice = (0, toolkit_1.createSlice)({
    name: "Product",
    initialState: { item: [] },
    reducers: {
        addProduct: function (state, action) {
            state.item = __spreadArray([], action.payload, true);
        },
        clearProduct: function (state) {
            state = null;
        },
        getState: function (state) {
            return state;
        },
    },
});
exports.addProduct = (_a = exports.CartSlice.actions, _a.addProduct), exports.clearProduct = _a.clearProduct, exports.getState = _a.getState;
