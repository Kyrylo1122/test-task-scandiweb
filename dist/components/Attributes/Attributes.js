"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../Box");
var AttributeList_1 = __importDefault(require("./AttributeList"));
function Attributes(_a) {
    var attributes = _a.attributes;
    return (<Box_1.Box as="ul">
      {attributes.map(function (attribute) { return (<li key={attribute.name}>
          <h2>{attribute.name}</h2>
          <AttributeList_1.default attribute={attribute}/>
        </li>); })}
    </Box_1.Box>);
}
exports.default = Attributes;
