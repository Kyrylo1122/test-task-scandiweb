"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var Box_1 = require("../../Box");
var CartSlice_1 = require("../../Redux/CartSlice");
var FixedTotalAmount_1 = require("../../tools/FixedTotalAmount");
var Cart_style_1 = require("../Cart.style");
var CartItems_style_1 = require("./CartItems.style");
function CartItemsList(_a) {
    var items = _a.items;
    var dispatch = (0, react_redux_1.useDispatch)();
    return items === null || items === void 0 ? void 0 : items.map(function (_a) {
        var id = _a.id, brand = _a.brand, gallery = _a.gallery, cartQuantity = _a.cartQuantity, name = _a.name, amount = _a.amount, symbol = _a.symbol;
        return (<Box_1.Box borderBottom="1px solid #5ECE7B" key={id}>
        <Cart_style_1.GridContainer>
          <Box_1.Box display="flex" alignItems="center">
            <Box_1.Box>
              <img src={gallery[0]} alt={id} width="200px"/>
            </Box_1.Box>
            <Box_1.Box ml="10px">
              <CartItems_style_1.CartItemsTitle>{name}</CartItems_style_1.CartItemsTitle>
              <CartItems_style_1.CartItemsText>{brand}</CartItems_style_1.CartItemsText>
              <CartItems_style_1.CartItemsRemoveBtn onClick={function () {
                dispatch((0, CartSlice_1.removeFromCart)({ id: id }));
                dispatch((0, CartSlice_1.getTotal)());
            }}>
                Remove
              </CartItems_style_1.CartItemsRemoveBtn>
            </Box_1.Box>
          </Box_1.Box>

          <Box_1.Box>
            <CartItems_style_1.CartItemsPrice>
              {amount} {symbol}{" "}
            </CartItems_style_1.CartItemsPrice>
          </Box_1.Box>
          <Box_1.Box display="flex" alignItems="center">
            <CartItems_style_1.CartItemsQuantityBtn onClick={function () {
                dispatch((0, CartSlice_1.decreaseQuantity)({ id: id }));
                dispatch((0, CartSlice_1.getTotal)());
            }}>
              -
            </CartItems_style_1.CartItemsQuantityBtn>
            <CartItems_style_1.CartItemsQuantity>{cartQuantity}</CartItems_style_1.CartItemsQuantity>
            <CartItems_style_1.CartItemsQuantityBtn onClick={function () {
                dispatch((0, CartSlice_1.increaseQuantity)({ id: id }));
                dispatch((0, CartSlice_1.getTotal)());
            }}>
              +
            </CartItems_style_1.CartItemsQuantityBtn>
          </Box_1.Box>
          <Box_1.Box>
            <CartItems_style_1.CartItemsPrice>
              {" "}
              {(0, FixedTotalAmount_1.FixedTotalAmount)(cartQuantity * amount)}
              {symbol}
            </CartItems_style_1.CartItemsPrice>
          </Box_1.Box>
        </Cart_style_1.GridContainer>
      </Box_1.Box>);
    });
}
exports.default = CartItemsList;
