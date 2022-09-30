"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../../../Box");
function CartGallery(_a) {
    var array = _a.array;
    return array.map(function (_a) {
        var brand = _a.brand, category = _a.category, gallery = _a.gallery, cartQuantity = _a.cartQuantity;
        return (<Box_1.Box as="li" display="flex" key={brand}>
      <Box_1.Box className="meta">
        <h2>{brand}</h2>
        <p>{category}</p>
      </Box_1.Box>
      <Box_1.Box>
        <img src={gallery[0]} alt={brand} width="120"/>
      </Box_1.Box>
      <p>Quantity: {cartQuantity}</p>
    </Box_1.Box>);
    });
}
exports.default = CartGallery;
