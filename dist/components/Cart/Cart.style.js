"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartSummaryText = exports.CartSummarySubTitle = exports.CartSummaryTitles = exports.ClearCartBtn = exports.CartGridTitles = exports.GridContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.GridContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 30px;\n  display: grid;\n  align-items: center;\n  grid-template-columns: 3fr 1fr 1fr 1fr;\n  column-gap: 0.5rem;\n"], ["\n  margin-bottom: 30px;\n  display: grid;\n  align-items: center;\n  grid-template-columns: 3fr 1fr 1fr 1fr;\n  column-gap: 0.5rem;\n"])));
exports.CartGridTitles = styled_components_1.default.h3(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 25px;\n"], ["\n  font-size: 25px;\n"])));
exports.ClearCartBtn = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 15px 20px;\n  font-size: large;\n  border-radius: 2px;\n  border: 1px solid grey;\n  background-color: white;\n  margin-top: 15px;\n"], ["\n  padding: 15px 20px;\n  font-size: large;\n  border-radius: 2px;\n  border: 1px solid grey;\n  background-color: white;\n  margin-top: 15px;\n"])));
exports.CartSummaryTitles = styled_components_1.default.h3(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  font-size: 25px;\n  font-weight: 500;\n  label {\n    margin-left: auto;\n  }\n"], ["\n  display: flex;\n  font-size: 25px;\n  font-weight: 500;\n  label {\n    margin-left: auto;\n  }\n"])));
exports.CartSummarySubTitle = styled_components_1.default.h3(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: 10px;\n\n  display: flex;\n  font-size: 25px;\n  font-weight: 300;\n  label {\n    margin-left: auto;\n  }\n"], ["\n  margin-top: 10px;\n\n  display: flex;\n  font-size: 25px;\n  font-weight: 300;\n  label {\n    margin-left: auto;\n  }\n"])));
exports.CartSummaryText = styled_components_1.default.p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-style: italic;\n  margin: 15px 0;\n"], ["\n  font-style: italic;\n  margin: 15px 0;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
