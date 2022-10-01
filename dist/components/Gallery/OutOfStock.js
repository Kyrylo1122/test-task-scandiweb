"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutOfStock = void 0;
var Box_1 = require("../Box");
var Card_style_1 = require("../Card/Card.style");
var OutOfStock = function () { return (<Box_1.Box backgroundColor="rgba(255, 255, 255, 0.5)" width="100%" height="100%" display="block" position="absolute" top="0">
    <Card_style_1.TextOutOfStock>OUT OF STOCK</Card_style_1.TextOutOfStock>
  </Box_1.Box>); };
exports.OutOfStock = OutOfStock;
