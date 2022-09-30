"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../../Box");
var ProductInfo_1 = __importDefault(require("../../ProductInfo/ProductInfo"));
function ProductInfo(_a) {
    var image = _a.image, alt = _a.alt;
    return (<Box_1.Box display="flex">
      <Box_1.Box className="right-sidebar-image">
        <img src={image} alt={alt} width="610" height="510"/>
      </Box_1.Box>
      <ProductInfo_1.default />
    </Box_1.Box>);
}
exports.default = ProductInfo;
