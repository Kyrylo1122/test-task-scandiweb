"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../Box");
var CartCard_style_1 = require("./CartCard.style");
var react_redux_1 = require("react-redux");
var CartSlice_1 = require("../Redux/CartSlice");
var CartSlice_2 = require("../Redux/CartSlice");
var react_1 = require("react");
function CartCard(_a) {
    var item = _a.item;
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch((0, CartSlice_1.getTotal)());
    }, [dispatch]);
    var id = item.id, brand = item.brand, category = item.category, gallery = item.gallery, cartQuantity = item.cartQuantity, name = item.name, amount = item.amount, symbol = item.symbol;
    return (<Box_1.Box display="flex" m="20px">
      <Box_1.Box className="meta" display="flex" flexDirection="column">
        <CartCard_style_1.CartCardTitle>{brand}</CartCard_style_1.CartCardTitle>
        <CartCard_style_1.CartCardText>{category}</CartCard_style_1.CartCardText>
        <CartCard_style_1.CartCardPrice>
          <label>
            {amount} {symbol}
          </label>
        </CartCard_style_1.CartCardPrice>

        <CartCard_style_1.CartCardRemoveBtn onClick={function () {
            dispatch((0, CartSlice_1.removeFromCart)({ id: id }));
        }}>
          Remove
        </CartCard_style_1.CartCardRemoveBtn>
      </Box_1.Box>
      <Box_1.Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" ml="auto">
        <CartCard_style_1.CartCardQuantityBtn onClick={function () {
            dispatch((0, CartSlice_2.decreaseQuantity)({ id: id }));
            dispatch((0, CartSlice_1.getTotal)());
        }}>
          -
        </CartCard_style_1.CartCardQuantityBtn>
        <span>{cartQuantity}</span>
        <CartCard_style_1.CartCardQuantityBtn onClick={function () {
            dispatch((0, CartSlice_2.increaseQuantity)({ id: id }));
            dispatch((0, CartSlice_1.getTotal)());
        }}>
          +
        </CartCard_style_1.CartCardQuantityBtn>
      </Box_1.Box>

      <Box_1.Box ml="8px">
        <img src={gallery[0]} alt={brand} width="120"/>
      </Box_1.Box>
    </Box_1.Box>);
}
exports.default = CartCard;
