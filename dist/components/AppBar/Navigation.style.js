"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationLink = exports.NavigationItem = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_router_dom_1 = require("react-router-dom");
exports.NavigationItem = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: ", "px;\n"], ["\n  margin: ", "px;\n"])), function (p) { return p.theme.space[3]; });
exports.NavigationLink = (0, styled_components_1.default)(react_router_dom_1.NavLink)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding-bottom: 30px;\n  padding-top: 28px;\n\n  display: block;\n\n  font-size: 16px;\n  line-height: 1.2;\n  color: inherit;\n\n  &.active {\n    color: ", ";\n    font-weight: 600;\n    border-bottom: 1px solid ", ";\n  }\n"], ["\n  padding-bottom: 30px;\n  padding-top: 28px;\n\n  display: block;\n\n  font-size: 16px;\n  line-height: 1.2;\n  color: inherit;\n\n  &.active {\n    color: ", ";\n    font-weight: 600;\n    border-bottom: 1px solid ", ";\n  }\n"])), function (p) { return p.theme.colors.accent; }, function (p) { return p.theme.colors.accent; });
var templateObject_1, templateObject_2;
