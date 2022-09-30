"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyle = void 0;
var styled_components_1 = require("styled-components");
exports.GlobalStyle = (0, styled_components_1.createGlobalStyle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\nbody{\n  \n    color: ", ";\n    font-family: Raleway, sans-serif;\n    font-weight: 400;\n    \n\n    a{\n    text-decoration: none;\n    }\n    ul{\n        list-style: none;\n\n    }\n    h1,h2,h3,h4,h5,h6,p,ul,li{\n        margin: 0;padding: 0;\n    }\n img{\n    display: block;\n    object-fit: contain;\n }\n button{\n    cursor: pointer;\n }\n .container{\n    padding:0 100px;\n    \n }\n}"], ["\n\nbody{\n  \n    color: ", ";\n    font-family: Raleway, sans-serif;\n    font-weight: 400;\n    \n\n    a{\n    text-decoration: none;\n    }\n    ul{\n        list-style: none;\n\n    }\n    h1,h2,h3,h4,h5,h6,p,ul,li{\n        margin: 0;padding: 0;\n    }\n img{\n    display: block;\n    object-fit: contain;\n }\n button{\n    cursor: pointer;\n }\n .container{\n    padding:0 100px;\n    \n }\n}"])), function (p) { return p.theme.colors.text; });
var templateObject_1;
