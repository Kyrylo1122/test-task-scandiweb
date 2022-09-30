"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../Box");
var OutOfStock_1 = require("./OutOfStock");
var Card_style_1 = require("./Card.style");
var react_redux_1 = require("react-redux");
function Card(_a) {
    var product = _a.product;
    var gallery = product.gallery, inStock = product.inStock, id = product.id, name = product.name, prices = product.prices;
    var currency = (0, react_redux_1.useSelector)(function (state) { return state.currency; });
    var currentPrice = prices.find(function (price) { return price.currency.symbol === currency.symbol; });
    return (<Card_style_1.CardLink to={id} style={!inStock ? { pointerEvents: "none" } : {}}>
      <Box_1.Box width="330px" height="354px" position="relative">
        <Card_style_1.ProductImage src={gallery[0]} alt={name}/>

        {!inStock && <OutOfStock_1.OutOfStock />}
      </Box_1.Box>
      <Box_1.Box mt="24px">
        <Card_style_1.CardText>{name}</Card_style_1.CardText>
        <Card_style_1.CardPrice>
          {currentPrice.amount} {currentPrice.currency.symbol}
        </Card_style_1.CardPrice>
      </Box_1.Box>
    </Card_style_1.CardLink>);
}
exports.default = Card;
