"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../../../Box");
function Atribute(_a) {
    var name = _a.name;
    return (<Box_1.Box key={name}>
      <h3>{name}</h3>

      <CustomAttributesBtn items={items} name={name}/>
    </Box_1.Box>);
}
exports.default = Atribute;
