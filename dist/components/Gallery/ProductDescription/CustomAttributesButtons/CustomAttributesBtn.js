"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../../../Box");
var react_1 = require("react");
var CustomAttributesBtn_module_css_1 = __importDefault(require("./CustomAttributesBtn.module.css"));
function CustomAttributesBtn(_a) {
    var items = _a.items, name = _a.name, onSelect = _a.onSelect;
    var _b = (0, react_1.useState)(items[0].value), activeOptionIdx = _b[0], setActiveOptionIdx = _b[1];
    (0, react_1.useEffect)(function () {
        onSelect({ name: name, activeOptionIdx: activeOptionIdx });
    }, [activeOptionIdx, name, onSelect]);
    return (<Box_1.Box as="ul" display="flex" m="-6px">
      {items.map(function (_a) {
            var value = _a.value;
            return (<Box_1.Box as="li" m="6px" key={value}>
          <button type="button" className={"".concat(CustomAttributesBtn_module_css_1.default.btn, " \n            ").concat(value === activeOptionIdx && CustomAttributesBtn_module_css_1.default.activeBtn)} onClick={function () { return setActiveOptionIdx(value); }}>
            {value}
          </button>
        </Box_1.Box>);
        })}
    </Box_1.Box>);
}
exports.default = CustomAttributesBtn;
