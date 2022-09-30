"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartGalleryPrice = exports.CartGalleryText = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.CartGalleryText = styled_components_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 160%;\n"], ["\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 160%;\n"])));
exports.CartGalleryPrice = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 160%;\n"], ["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 160%;\n"])));
var templateObject_1, templateObject_2;
