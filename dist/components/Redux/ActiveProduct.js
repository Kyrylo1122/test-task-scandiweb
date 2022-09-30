"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSetActiveProduct = exports.ProductSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.ProductSlice = (0, toolkit_1.createSlice)({
    name: "Product",
    initialState: { activeProduct: {} },
    reducers: {
        handleSetActiveProduct: function (state, action) {
            state.activeProduct = action.payload;
        },
    },
});
exports.handleSetActiveProduct = exports.ProductSlice.actions.handleSetActiveProduct;
