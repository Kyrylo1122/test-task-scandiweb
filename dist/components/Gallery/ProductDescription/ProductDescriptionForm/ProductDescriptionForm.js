"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../../../Box");
var react_1 = require("react");
var CustomAttributesBtn_1 = __importDefault(require("../CustomAttributesButtons/CustomAttributesBtn"));
function ProductDescriptionForm(_a) {
    var attributes = _a.attributes, onSelect = _a.onSelect;
    var _b = (0, react_1.useState)([]), param = _b[0], setParam = _b[1];
    // const param = [];
    var array = function (data) {
        var isExist = __spreadArray([], param, true).findIndex(function (option) { return option.name === data.name; });
        // setParam((state) => [...state, data]);
        // if (isExist >= 0) {
        //   param[isExist] = data;
        // } else {
        //   param.push(data);
        // }
        // onSelect(param);
    };
    return (<Box_1.Box>
      {attributes.map(function (_a) {
            var items = _a.items, name = _a.name;
            return (<Box_1.Box key={name}>
            <h3>{name}</h3>

            <CustomAttributesBtn_1.default items={items} name={name} onSelect={array}/>
          </Box_1.Box>);
        })}
    </Box_1.Box>);
}
exports.default = ProductDescriptionForm;
