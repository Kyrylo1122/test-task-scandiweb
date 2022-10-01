"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var Box_1 = require("../Box");
var CartModal_style_1 = require("../CartModal/CartModal.style");
var EmptyCardModal_1 = __importDefault(require("../CartModal/EmptyCardModal/EmptyCardModal"));
var CartSlice_1 = require("../Redux/CartSlice");
var Cart_style_1 = require("./Cart.style");
var CartItems_1 = __importDefault(require("./CartItemsList/CartItems"));
function Cart() {
    var dispatch = (0, react_redux_1.useDispatch)();
    var _a = (0, react_redux_1.useSelector)(function (state) { return state.cart; }), cartItem = _a.cartItem, cartTotalQuantity = _a.cartTotalQuantity, cartTotalAmount = _a.cartTotalAmount;
    var symbol = (0, react_redux_1.useSelector)(function (state) { return state.currency; }).symbol;
    if (!cartItem.length) {
        return (<Box_1.Box className="container">
        <EmptyCardModal_1.default />
      </Box_1.Box>);
    }
    return (<Box_1.Box className="container" display="flex" flexDirection="column">
      <Cart_style_1.GridContainer>
        <Cart_style_1.CartGridTitles>Product</Cart_style_1.CartGridTitles>
        <Cart_style_1.CartGridTitles>Price</Cart_style_1.CartGridTitles>
        <Cart_style_1.CartGridTitles>Quantity</Cart_style_1.CartGridTitles>
        <Cart_style_1.CartGridTitles>Total</Cart_style_1.CartGridTitles>
      </Cart_style_1.GridContainer>
      <CartItems_1.default items={cartItem}/>
      <Box_1.Box>
        <Cart_style_1.ClearCartBtn onClick={function () {
            dispatch((0, CartSlice_1.clearCart)());
            dispatch((0, CartSlice_1.getTotal)());
        }}>
          Clear cart
        </Cart_style_1.ClearCartBtn>
      </Box_1.Box>
      <Box_1.Box className="cart-summary" maxWidth="600px" width="100%" ml="auto" borderRadius="5px" p="5px">
        <Cart_style_1.CartSummaryTitles>
          Subtotal:
          <label>
            {cartTotalAmount} {symbol}
          </label>
        </Cart_style_1.CartSummaryTitles>
        <Cart_style_1.CartSummarySubTitle>
          Quantity:
          <label>{cartTotalQuantity}</label>
        </Cart_style_1.CartSummarySubTitle>
        <Cart_style_1.CartSummaryText>
          Taxes and shipping are calculated at total price
        </Cart_style_1.CartSummaryText>
        <Box_1.Box display="flex">
          <CartModal_style_1.CartLinkBtnSecond to="/">Continue shopping</CartModal_style_1.CartLinkBtnSecond>
          <Box_1.Box ml="10px">
            <CartModal_style_1.CartLinkBtnFirst to="/checkout" onClick={function () {
            dispatch((0, CartSlice_1.clearCart)());
            dispatch((0, CartSlice_1.getTotal)());
        }}>
              Check out
            </CartModal_style_1.CartLinkBtnFirst>{" "}
          </Box_1.Box>
        </Box_1.Box>
      </Box_1.Box>
    </Box_1.Box>);
}
exports.default = Cart;
