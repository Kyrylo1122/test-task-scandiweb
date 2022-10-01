"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartCardRemoveBtn = exports.CartCardQuantityBtn = exports.CartCardTotalPrice = exports.CartCardPrice = exports.CartCardText = exports.CartCardTitle = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.CartCardTitle = styled_components_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 160%;\n"], ["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 160%;\n"])));
exports.CartCardText = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 160%;\n"], ["\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 160%;\n"])));
exports.CartCardPrice = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 160%;\n  label {\n    font-weight: 400;\n  }\n"], ["\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 160%;\n  label {\n    font-weight: 400;\n  }\n"])));
exports.CartCardTotalPrice = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: auto;\n  font-weight: 300;\n  font-family: sans-serif;\n  font-size: 16px;\n  line-height: 160%;\n  label {\n    font-weight: 400;\n  }\n"], ["\n  margin-top: auto;\n  font-weight: 300;\n  font-family: sans-serif;\n  font-size: 16px;\n  line-height: 160%;\n  label {\n    font-weight: 400;\n  }\n"])));
exports.CartCardQuantityBtn = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border: 1px solid black;\n  background-color: white;\n  width: 24px;\n  height: 24px;\n"], ["\n  border: 1px solid black;\n  background-color: white;\n  width: 24px;\n  height: 24px;\n"])));
exports.CartCardRemoveBtn = styled_components_1.default.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: 15px;\n\n  border: 1px solid ", ";\n  border-radius: 4px;\n  background-color: white;\n  color: ", "; ;\n"], ["\n  margin-top: 15px;\n\n  border: 1px solid ", ";\n  border-radius: 4px;\n  background-color: white;\n  color: ", "; ;\n"])), function (s) { return s.theme.colors.accent; }, function (s) { return s.theme.colors.accent; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
