"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemsQuantityBtn = exports.CartItemsQuantity = exports.CartItemsPrice = exports.CartItemsRemoveBtn = exports.CartItemsText = exports.CartItemsTitle = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.CartItemsTitle = styled_components_1.default.h3(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: 600;\n  font-size: 25px;\n  line-height: 27px;\n"], ["\n  font-weight: 600;\n  font-size: 25px;\n  line-height: 27px;\n"])));
exports.CartItemsText = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 16px;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 27px;\n"], ["\n  margin-top: 16px;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 27px;\n"])));
exports.CartItemsRemoveBtn = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: 15px;\n\n  border: 1px solid ", ";\n  border-radius: 4px;\n  background-color: white;\n  color: ", "; ;\n"], ["\n  margin-top: 15px;\n\n  border: 1px solid ", ";\n  border-radius: 4px;\n  background-color: white;\n  color: ", "; ;\n"])), function (s) { return s.theme.colors.accent; }, function (s) { return s.theme.colors.accent; });
exports.CartItemsPrice = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 24px;\n"], ["\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 24px;\n"])));
exports.CartItemsQuantity = styled_components_1.default.p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 24px;\n  margin: 0 10px;\n"], ["\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 24px;\n  margin: 0 10px;\n"])));
exports.CartItemsQuantityBtn = styled_components_1.default.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  border: 1px solid black;\n  background-color: white;\n  width: 30px;\n  height: 30px;\n"], ["\n  border: 1px solid black;\n  background-color: white;\n  width: 30px;\n  height: 30px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
