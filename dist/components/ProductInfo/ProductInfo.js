"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var AddToCartBtn_1 = __importDefault(require("../AddToCartBtn/AddToCartBtn"));
var Box_1 = require("../Box");
var Context_1 = require("../tools/Context/Context");
var GetPrice_1 = __importDefault(require("../tools/GetPrice"));
var react_redux_1 = require("react-redux");
var ProductInfo_style_1 = require("./ProductInfo.style");
var ProductInfo_module_css_1 = __importDefault(require("./ProductInfo.module.css"));
var CartSlice_1 = require("../Redux/CartSlice");
function ProductInfo() {
    var product = (0, react_1.useContext)(Context_1.ProductContext);
    var description = product.description, name = product.name, brand = product.brand, prices = product.prices, id = product.id;
    var _a = (0, GetPrice_1.default)(prices), amount = _a.amount, symbol = _a.symbol;
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch((0, CartSlice_1.addPrice)({ id: id, amount: amount, symbol: symbol }));
    }, [amount, dispatch, id, prices, symbol]);
    var onBtnSubmit = function () {
        var newProduct = __assign(__assign({}, product), { amount: amount, symbol: symbol });
        dispatch((0, CartSlice_1.addToCart)(newProduct));
        dispatch((0, CartSlice_1.getTotal)());
    };
    return (<Box_1.Box>
      <ProductInfo_style_1.ProductTitle>{name}</ProductInfo_style_1.ProductTitle>
      <ProductInfo_style_1.ProductText>{brand}</ProductInfo_style_1.ProductText>
      <ProductInfo_style_1.ProductPrice>Price:</ProductInfo_style_1.ProductPrice>
      <p className={ProductInfo_module_css_1.default.productPrice}>
        {amount} {symbol}
      </p>
      <AddToCartBtn_1.default onSubmit={onBtnSubmit}/>
      <ProductInfo_style_1.ProductDescription>{description}</ProductInfo_style_1.ProductDescription>
    </Box_1.Box>);
}
exports.default = ProductInfo;
