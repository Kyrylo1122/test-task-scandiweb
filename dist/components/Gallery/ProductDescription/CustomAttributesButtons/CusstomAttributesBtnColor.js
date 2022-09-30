"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../../../Box");
function CustomAttributesBtnColor(_a) {
    var items = _a.items;
    return (<Box_1.Box as="ul" m="-4px" display="flex">
      {items.map(function (_a, index) {
            var value = _a.value;
            return (<Box_1.Box as="li" m="4px" key={value}>
          <Box_1.Box display="block" width="32px" height="32px" backgroundColor={value} cursor="pointer"/>
        </Box_1.Box>);
        })}
    </Box_1.Box>);
}
exports.default = CustomAttributesBtnColor;
