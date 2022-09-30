"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../../Box");
var OutOfStock_1 = require("../OutOfStock");
var Card_style_1 = require("./Card.style");
var Card_module_css_1 = __importDefault(require("./Card.module.css"));
var react_router_1 = require("react-router");
var Price_1 = __importDefault(require("../../Price/Price"));
function Card(_a) {
    var product = _a.product;
    var gallery = product.gallery, inStock = product.inStock, id = product.id, name = product.name, prices = product.prices;
    var _b = (0, Price_1.default)(prices), amount = _b.amount, symbol = _b.symbol;
    var location = (0, react_router_1.useLocation)();
    return (<Card_style_1.CardLink state={{ from: location }} to={"/".concat(id)} style={!inStock ? { pointerEvents: "none" } : {}}>
      <Box_1.Box width="330px" height="354px" position="relative">
        <Card_style_1.ProductImage src={gallery[0]} alt={name}/>

        {!inStock && <OutOfStock_1.OutOfStock />}
      </Box_1.Box>
      <Box_1.Box mt="24px">
        <Card_style_1.CardText>{name}</Card_style_1.CardText>
        <p className={Card_module_css_1.default.cardPrice}>
          {amount} {symbol}
        </p>
      </Box_1.Box>
    </Card_style_1.CardLink>);
}
exports.default = Card;
