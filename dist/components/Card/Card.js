"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../Box");
var OutOfStock_1 = require("../Gallery/OutOfStock");
var Card_style_1 = require("./Card.style");
var react_router_1 = require("react-router");
var GetPrice_1 = __importDefault(require("../tools/GetPrice"));
function Card(_a) {
    var product = _a.product;
    var gallery = product.gallery, inStock = product.inStock, id = product.id, name = product.name, prices = product.prices;
    var _b = (0, GetPrice_1.default)(prices), amount = _b.amount, symbol = _b.symbol;
    var location = (0, react_router_1.useLocation)();
    return (<Card_style_1.CardLink state={{ from: location }} to={"/".concat(id)} style={!inStock ? { pointerEvents: "none" } : {}}>
      <Box_1.Box width="100%" height="354px" position="relative">
        <Card_style_1.ProductImage src={gallery[0]} alt={name}/>

        {!inStock && <OutOfStock_1.OutOfStock />}
      </Box_1.Box>
      <Box_1.Box mt="24px">
        <Card_style_1.CardText>{name}</Card_style_1.CardText>
        <Card_style_1.CardPrice>
          {amount} {symbol}
        </Card_style_1.CardPrice>
      </Box_1.Box>
    </Card_style_1.CardLink>);
}
exports.default = Card;
