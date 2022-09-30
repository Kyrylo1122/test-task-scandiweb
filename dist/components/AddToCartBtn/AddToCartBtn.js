"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddToCartBtn_style_1 = require("./AddToCartBtn.style");
function AddToCartBtn(_a) {
    var onSubmit = _a.onSubmit;
    return (<AddToCartBtn_style_1.AddToCart type="button" onClick={onSubmit}>
      ADD TO CART
    </AddToCartBtn_style_1.AddToCart>);
}
exports.default = AddToCartBtn;
