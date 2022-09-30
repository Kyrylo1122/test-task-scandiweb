"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var Box_1 = require("../Box");
var CartSlice_1 = require("../Redux/CartSlice");
var FixedTotalAmount_1 = require("../tools/FixedTotalAmount");
var Cart_style_1 = require("./Cart.style");
function CartItemsList(_a) {
    var items = _a.items;
    var dispatch = (0, react_redux_1.useDispatch)();
    return items === null || items === void 0 ? void 0 : items.map(function (_a) {
        var id = _a.id, brand = _a.brand, category = _a.category, gallery = _a.gallery, cartQuantity = _a.cartQuantity, name = _a.name, amount = _a.amount, symbol = _a.symbol;
        return (<Cart_style_1.GridContainer key={id}>
        <Box_1.Box display="flex" alignItems="center">
          <Box_1.Box>
            <img src={gallery[0]} alt={id} width="200px"/>
          </Box_1.Box>
          <Box_1.Box ml="10px">
            <h3>{name}</h3>
            <p>{brand}</p>
            <button onClick={function () {
                dispatch((0, CartSlice_1.removeFromCart)({ id: id }));
                dispatch((0, CartSlice_1.getTotal)());
            }}>
              Remove
            </button>
          </Box_1.Box>
        </Box_1.Box>

        <Box_1.Box>
          <p>
            {amount} {symbol}p{" "}
          </p>
        </Box_1.Box>
        <Box_1.Box display="flex" alignItems="center">
          <button onClick={function () {
                dispatch((0, CartSlice_1.decreaseQuantity)({ id: id }));
                dispatch((0, CartSlice_1.getTotal)());
            }}>
            -
          </button>
          <span>{cartQuantity}</span>
          <button onClick={function () {
                dispatch((0, CartSlice_1.increaseQuantity)({ id: id }));
                dispatch((0, CartSlice_1.getTotal)());
            }}>
            +
          </button>
        </Box_1.Box>
        <Box_1.Box>
          {(0, FixedTotalAmount_1.FixedTotalAmount)(cartQuantity * amount)}
          {symbol}
        </Box_1.Box>
      </Cart_style_1.GridContainer>);
    });
}
exports.default = CartItemsList;
