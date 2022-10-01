"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPrice = void 0;
var findPrice = function (prices, symbol) {
    return prices.find(function (price) { return price.currency.symbol === symbol; });
};
exports.findPrice = findPrice;
