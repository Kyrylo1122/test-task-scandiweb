"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var formik_1 = require("formik");
var Box_1 = require("../../../Box");
var react_1 = require("react");
var Specification_module_css_1 = __importDefault(require("./Specification.module.css"));
function SpecificationList(_a) {
    var items = _a.items, name = _a.name;
    return (<Box_1.Box as="ul">
      {items.map(function (_a) {
            var value = _a.value;
            return (<li key={value}>
            <Specification value={value} name={name}/>
          </li>);
        })}
    </Box_1.Box>);
}
exports.default = SpecificationList;
function Specification(_a) {
    var name = _a.name, value = _a.value;
    var _b = (0, react_1.useState)(false), checked = _b[0], setChecked = _b[1];
    return (<label>
      <formik_1.Field type="radio" name={name} value={value} required checked={checked} onClick={function () {
            setChecked(true);
        }}/>
      <Box_1.Box border="1px solid black" className={checked ? Specification_module_css_1.default.active : Specification_module_css_1.default.passive}>
        {value}
      </Box_1.Box>
    </label>);
}
