"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getState = exports.clearProduct = exports.addProduct = exports.ProductSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.ProductSlice = (0, toolkit_1.createSlice)({
    name: "Product",
    initialState: { item: {} },
    reducers: {
        addProduct: function (state, action) {
            state.item = action.payload;
        },
        clearProduct: function (state) {
            state = null;
        },
        getState: function (state) {
            return state;
        },
    },
});
exports.addProduct = (_a = exports.ProductSlice.actions, _a.addProduct), exports.clearProduct = _a.clearProduct, exports.getState = _a.getState;
