"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var AddToCartBtn_1 = __importDefault(require("../../AddToCartBtn/AddToCartBtn"));
var Box_1 = require("../../Box");
var Context_1 = require("../../Context/Context");
var Price_1 = __importDefault(require("../../Price/Price"));
function ProductInfo() {
    var _a = (0, react_1.useContext)(Context_1.ProductContext), description = _a.description, name = _a.name, category = _a.category, prices = _a.prices;
    var onBtnSubmit = function () {
        console.log({ name: name, category: category, prices: prices });
    };
    return (<Box_1.Box>
      <h2>{name}</h2>
      <p>{category}</p>
      <Price_1.default prices={prices}/>
      <AddToCartBtn_1.default onSubmit={onBtnSubmit}/>
      <p>{description}</p>
    </Box_1.Box>);
}
exports.default = ProductInfo;
