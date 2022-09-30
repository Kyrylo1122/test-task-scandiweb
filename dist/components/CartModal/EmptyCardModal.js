"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var Box_1 = require("../Box");
function EmptyCardModal(_a) {
    var closeCart = _a.closeCart;
    return (<Box_1.Box>
      <h2>Shopping Cart</h2>
      <p> Your Cart is Currently empty</p>
      <react_router_dom_1.Link to="/women">
        {/* onClick={() => closeCart()} */}
        Start shopping
      </react_router_dom_1.Link>
    </Box_1.Box>);
}
exports.default = EmptyCardModal;
