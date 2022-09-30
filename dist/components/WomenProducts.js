"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WomenProducts = void 0;
var react_1 = require("react");
var Box_1 = require("./Box");
var WomenProducts = /** @class */ (function (_super) {
    __extends(WomenProducts, _super);
    function WomenProducts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WomenProducts.prototype.render = function () {
        return (<Box_1.Box as="section" paddingTop="10px">
        <h1>Women products</h1>
      </Box_1.Box>);
    };
    return WomenProducts;
}(react_1.Component));
exports.WomenProducts = WomenProducts;
