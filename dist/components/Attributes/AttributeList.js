"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../Box");
function AttributeList(_a) {
    var attribute = _a.attribute;
    var name = attribute.name, items = attribute.items;
    return (<Box_1.Box as="ul" display="flex">
      {items.map(function (_a) {
            var value = _a.value, displayValue = _a.displayValue;
            return (<li key={value}>
          <button style={{
                    backgroundColor: "".concat(value),
                    padding: "10px",
                }}>
            {name === "Color" ? "" : value}
          </button>
        </li>);
        })}
    </Box_1.Box>);
}
exports.default = AttributeList;
