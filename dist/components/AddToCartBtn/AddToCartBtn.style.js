"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToCart = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.AddToCart = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 16px 92px;\n  background-color: ", ";\n  color: white;\n  border: none;\n  cursor: pointer;\n"], ["\n  padding: 16px 92px;\n  background-color: ", ";\n  color: white;\n  border: none;\n  cursor: pointer;\n"])), function (p) { return p.theme.colors.accent; });
var templateObject_1;
