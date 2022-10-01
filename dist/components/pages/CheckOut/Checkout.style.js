"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckOutText = exports.CheckOutTitle = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.CheckOutTitle = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 180px;\n\n  font-size: 40px;\n\n  &:after {\n    content: \"\";\n    display: flex;\n\n    margin-top: 20px;\n    margin-left: 50px;\n    height: 1px;\n    width: 80%;\n    background-color: #5ece7b;\n  }\n"], ["\n  margin-top: 180px;\n\n  font-size: 40px;\n\n  &:after {\n    content: \"\";\n    display: flex;\n\n    margin-top: 20px;\n    margin-left: 50px;\n    height: 1px;\n    width: 80%;\n    background-color: #5ece7b;\n  }\n"])));
exports.CheckOutText = styled_components_1.default.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 20px;\n  font-size: 20px;\n\n  font-weight: 700;\n"], ["\n  margin-top: 20px;\n  font-size: 20px;\n\n  font-weight: 700;\n"])));
var templateObject_1, templateObject_2;
