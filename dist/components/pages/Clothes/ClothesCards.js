"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../../Box");
var Loading_1 = __importDefault(require("../../Loading/Loading"));
var GetProducts = require("../../Api/Api").GetProducts;
var Card = require("../../Card/Card").default;
var ProductCard = require("../../Card/Card.style").ProductCard;
function ClothesCards() {
    var _a;
    var _b = GetProducts(), error = _b.error, loading = _b.loading, data = _b.data;
    if (loading)
        return <Loading_1.default />;
    if (error)
        return <p>Error :(</p>;
    var products = ((_a = data === null || data === void 0 ? void 0 : data.categories) === null || _a === void 0 ? void 0 : _a.find(function (category) { return category.name === "clothes"; })).products;
    return (<Box_1.Box as="ul" display="flex" flexWrap="wrap" m="-20px">
      {products &&
            products.map(function (product) { return (<ProductCard key={product.id}>
            {<Card product={product}/>}
          </ProductCard>); })}
    </Box_1.Box>);
}
exports.default = ClothesCards;
