"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../../Box");
var bs_1 = require("react-icons/bs");
var Actions_style_1 = require("./Actions.style");
var CurrenciesList_1 = __importDefault(require("./CurrencyList/CurrenciesList"));
var CartModal_1 = __importDefault(require("../../CartModal/CartModal"));
var react_1 = require("react");
var react_redux_1 = require("react-redux");
function Actions(_a) {
    var symbol = _a.symbol;
    var cart = (0, react_redux_1.useSelector)(function (state) { return state.cart; });
    var _b = (0, react_1.useState)(false), isCurrenciesListOpen = _b[0], setIsCurrenciesListOpen = _b[1];
    var _c = (0, react_1.useState)(false), isCartOpen = _c[0], setIsCartOpen = _c[1];
    var handleClose = function () { return setIsCartOpen(false); };
    var handleShow = function () { return setIsCartOpen(true); };
    var _d = (0, react_1.useState)(""), currency = _d[0], setCurrency = _d[1];
    (0, react_1.useEffect)(function () {
        setCurrency(symbol);
    }, [symbol]);
    return (<Box_1.Box display="flex">
      <Box_1.Box className="dropdown" position="relative">
        <Actions_style_1.ActionBtn type="button" onClick={function () {
            setIsCurrenciesListOpen(function (state) { return !state; });
            setIsCartOpen(false);
        }}>
          {currency}
        </Actions_style_1.ActionBtn>
        {isCurrenciesListOpen && (<CurrenciesList_1.default className="dropdown-menu" onClose={function () { return setIsCurrenciesListOpen(false); }}/>)}
      </Box_1.Box>

      <Box_1.Box className="dropdown" position="relative">
        <Actions_style_1.ActionBtn type="button" onClick={function () {
            handleShow();
            setIsCurrenciesListOpen(false);
        }}>
          {cart.cartTotalQuantity > 0 && (<Box_1.Box backgroundColor="accent" color="white" borderRadius="50%" width="20px" height="20px" fontSize="14px" position="absolute" top="0" right="10%">
              {cart.cartTotalQuantity}
            </Box_1.Box>)}

          <bs_1.BsCart2 />
        </Actions_style_1.ActionBtn>
        {isCartOpen && <CartModal_1.default closeCart={handleClose}/>}
      </Box_1.Box>
    </Box_1.Box>);
}
exports.default = Actions;
