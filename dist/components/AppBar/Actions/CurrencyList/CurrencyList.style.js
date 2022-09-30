"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyItem = exports.ModalCurrencyList = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.ModalCurrencyList = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  z-index: 1;\n"], ["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  z-index: 1;\n"])));
exports.CurrencyItem = styled_components_1.default.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n\n  padding: 8px 20px;\n  cursor: pointer;\n  background-color: ", ";\n  font-family: inherit;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.6;\n  text-align: left;\n\n  :hover,\n  :focus {\n    background-color: #eeeeee;\n  }\n"], ["\n  width: 100%;\n\n  padding: 8px 20px;\n  cursor: pointer;\n  background-color: ", ";\n  font-family: inherit;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.6;\n  text-align: left;\n\n  :hover,\n  :focus {\n    background-color: #eeeeee;\n  }\n"])), function (props) { return props.theme.colors.white; });
var templateObject_1, templateObject_2;
