"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
function GetPrice(prices) {
    var currency = (0, react_redux_1.useSelector)(function (state) { return state.currency; });
    var _a = prices.find(function (price) { return price.currency.symbol === currency.symbol; }), amount = _a.amount, symbol = _a.currency.symbol;
    return { amount: amount, symbol: symbol };
}
exports.default = GetPrice;
