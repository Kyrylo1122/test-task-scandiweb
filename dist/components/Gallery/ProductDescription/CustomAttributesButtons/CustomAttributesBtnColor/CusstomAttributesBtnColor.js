"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../../../../Box");
var CustomAttributesBtnColor_module_css_1 = __importDefault(require("./CustomAttributesBtnColor.module.css"));
var react_1 = require("react");
function CustomAttributesBtnColor(_a) {
    var items = _a.items, name = _a.name;
    var _b = (0, react_1.useState)(0), active = _b[0], setActive = _b[1];
    return (<Box_1.Box as="ul" m="-4px" display="flex">
      {items.map(function (_a, index) {
            var value = _a.value;
            return (<Box_1.Box as="li" m="4px" key={value}>
            <button className={"".concat(CustomAttributesBtnColor_module_css_1.default.btn, "  ").concat(index === active && CustomAttributesBtnColor_module_css_1.default.activeBtn)} style={{ backgroundColor: value }} onClick={function () {
                    setActive(index);
                }}></button>
          </Box_1.Box>);
        })}
    </Box_1.Box>);
}
exports.default = CustomAttributesBtnColor;
