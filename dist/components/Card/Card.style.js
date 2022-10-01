"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardLink = exports.TextOutOfStock = exports.CardPrice = exports.CardText = exports.ProductCard = exports.ProductImage = void 0;
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = __importDefault(require("styled-components"));
exports.ProductImage = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n"], ["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n"])));
exports.ProductCard = styled_components_1.default.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: calc((100% / 3) - 40px);\n  padding: 16px;\n  margin: 20px;\n  transform: scale(1);\n  transition: transform 300ms ease-in-out;\n  :hover,\n  :focus {\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    transform: scale(1.1);\n  }\n"], ["\n  width: calc((100% / 3) - 40px);\n  padding: 16px;\n  margin: 20px;\n  transform: scale(1);\n  transition: transform 300ms ease-in-out;\n  :hover,\n  :focus {\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    transform: scale(1.1);\n  }\n"])));
exports.CardText = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: 300;\n  font-size: 18px;\n  line-height: 1.6;\n"], ["\n  font-weight: 300;\n  font-size: 18px;\n  line-height: 1.6;\n"])));
exports.CardPrice = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.6;\n"], ["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.6;\n"])));
exports.TextOutOfStock = styled_components_1.default.p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  color: ", ";\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 1.6;\n  text-align: center;\n  width: 100%;\n"], ["\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  color: ", ";\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 1.6;\n  text-align: center;\n  width: 100%;\n"])), function (p) { return p.theme.colors.grey; });
exports.CardLink = (0, styled_components_1.default)(react_router_dom_1.Link)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: inherit;\n"], ["\n  color: inherit;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
