"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../Box");
var CartCard_1 = __importDefault(require("../CartModal/CartCard/CartCard"));
function CartGallery(_a) {
    var array = _a.array;
    return (<Box_1.Box as="ul" display="flex" flexDirection="column">
      {array.map(function (item) { return (<Box_1.Box as="li" key={item.id} borderBottom="1px solid grey">
          <CartCard_1.default item={item}/>
        </Box_1.Box>); })}
    </Box_1.Box>);
}
exports.default = CartGallery;
