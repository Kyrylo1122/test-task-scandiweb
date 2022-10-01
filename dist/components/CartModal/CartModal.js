"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var Box_1 = require("../Box");
var CartGallery_1 = __importDefault(require("../CartGallery/CartGallery"));
var CartSlice_1 = require("../Redux/CartSlice");
var CartModal_style_1 = require("./CartModal.style");
var EmptyCardModal_1 = __importDefault(require("./EmptyCardModal/EmptyCardModal"));
function CartModal(_a) {
    var closeCart = _a.closeCart;
    var dispatch = (0, react_redux_1.useDispatch)();
    var cart = (0, react_redux_1.useSelector)(function (state) { return state.cart; });
    var symbol = (0, react_redux_1.useSelector)(function (state) { return state.currency; }).symbol;
    (0, react_1.useEffect)(function () {
        var handleKeyDown = function (e) {
            if (e.code === "Escape") {
                closeCart();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        dispatch((0, CartSlice_1.getTotal)());
        return function () {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [cart, closeCart, dispatch]);
    return (<CartModal_style_1.Overlay onClick={function (e) {
            if (e.target === e.currentTarget) {
                closeCart();
            }
        }}>
      <CartModal_style_1.CardModal>
        {cart.cartItem.length === 0 ? (<EmptyCardModal_1.default closeCart={closeCart}/>) : (<Box_1.Box>
            <CartModal_style_1.ShoppingCartTitle>
              My Bag<span> {cart.cartTotalQuantity} items</span>
            </CartModal_style_1.ShoppingCartTitle>
            <CartGallery_1.default array={cart.cartItem}/>
            <Box_1.Box display="block">
              <CartModal_style_1.ShoppingCartTotalTitle>
                Total:{" "}
                <span>
                  {cart.cartTotalAmount} {symbol}
                </span>
              </CartModal_style_1.ShoppingCartTotalTitle>
              <CartModal_style_1.ShoppingCartText>
                Taxes and shipping are calculated at total price
              </CartModal_style_1.ShoppingCartText>
            </Box_1.Box>
            <Box_1.Box display="flex" mt="40px">
              <CartModal_style_1.CartLinkBtnSecond to="cart" onClick={function () {
                closeCart();
            }}>
                View Bag
              </CartModal_style_1.CartLinkBtnSecond>
              <Box_1.Box ml="10px">
                <CartModal_style_1.CartLinkBtnFirst to="/checkout" onClick={function () {
                dispatch((0, CartSlice_1.clearCart)());
                dispatch((0, CartSlice_1.getTotal)());
                closeCart();
            }}>
                  Check out
                </CartModal_style_1.CartLinkBtnFirst>
              </Box_1.Box>
            </Box_1.Box>
          </Box_1.Box>)}
      </CartModal_style_1.CardModal>
    </CartModal_style_1.Overlay>);
}
exports.default = CartModal;
