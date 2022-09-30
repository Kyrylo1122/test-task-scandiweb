"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDescription = exports.ProductPrice = exports.ProductText = exports.ProductTitle = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.ProductTitle = styled_components_1.default.h2(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 16px;\n\n  font-weight: 600;\n  font-size: 30px;\n  line-height: 27px;\n"], ["\n  margin-bottom: 16px;\n\n  font-weight: 600;\n  font-size: 30px;\n  line-height: 27px;\n"])));
exports.ProductText = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 40px;\n\n  font-weight: 400;\n  font-size: 30px;\n  line-height: 27px;\n"], ["\n  margin-bottom: 40px;\n\n  font-weight: 400;\n  font-size: 30px;\n  line-height: 27px;\n"])));
exports.ProductPrice = styled_components_1.default.h3(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: 10px;\n\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 18px;\n"], ["\n  margin-bottom: 10px;\n\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 18px;\n"])));
exports.ProductDescription = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: 16px;\n\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 159.96%;\n"], ["\n  margin-top: 16px;\n\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 159.96%;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
