"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../../Box");
var CartModal_style_1 = require("../CartModal.style");
var EmptyCardModal_style_1 = require("./EmptyCardModal.style");
function EmptyCardModal(_a) {
    var closeCart = _a.closeCart;
    return (<Box_1.Box>
      <h2>Shopping Cart</h2>
      <EmptyCardModal_style_1.EmptyCardModalText> Your Cart is currently empty</EmptyCardModal_style_1.EmptyCardModalText>
      <CartModal_style_1.CartLinkBtnSecond to="/" onClick={function () { return closeCart(); }}>
        Start shopping
      </CartModal_style_1.CartLinkBtnSecond>
    </Box_1.Box>);
}
exports.default = EmptyCardModal;
