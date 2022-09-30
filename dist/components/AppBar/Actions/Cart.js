"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var Box_1 = require("../../Box");
var CartGallery_1 = __importDefault(require("./CartGallery/CartGallery"));
function Cart() {
    var _a = (0, react_redux_1.useSelector)(function (state) { return state.product; }), cartItem = _a.cartItem, cartTotalQuantity = _a.cartTotalQuantity, cartTotalAmount = _a.cartTotalAmount;
    console.log("cartItem", cartItem);
    return (<Box_1.Box p="32px 16px" position="absolute" width="325px" backgroundColor="aqua" right="0%">
      <h2>Shopping cart</h2>
      {cartItem.length === 0 ? (<p>The cart is empty</p>) : (<CartGallery_1.default array={cartItem}/>)}
      <react_router_dom_1.Link to="cart">View Bag</react_router_dom_1.Link>
    </Box_1.Box>);
}
exports.default = Cart;
