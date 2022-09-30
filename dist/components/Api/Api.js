"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetCurrencies = exports.GetProducts = exports.GetDescriptionOfProduct = void 0;
var client_1 = require("@apollo/client");
var GET_ALL_CURRENCIES = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query {\n    currencies {\n      label\n      symbol\n    }\n  }\n"], ["\n  query {\n    currencies {\n      label\n      symbol\n    }\n  }\n"])));
var ALL_PRODUCTS = (0, client_1.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query {\n    categories {\n      name\n      products {\n        gallery\n        inStock\n        id\n        name\n        prices {\n          amount\n          currency {\n            symbol\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query {\n    categories {\n      name\n      products {\n        gallery\n        inStock\n        id\n        name\n        prices {\n          amount\n          currency {\n            symbol\n          }\n        }\n      }\n    }\n  }\n"])));
var DESCRIPTION_OF_PRODUCT = (0, client_1.gql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query FindProduct($id: String!) {\n    product(id: $id) {\n      id\n      brand\n      category\n      gallery\n      description\n      name\n      prices {\n        amount\n        currency {\n          label\n          symbol\n        }\n      }\n      attributes {\n        name\n        items {\n          value\n          displayValue\n        }\n      }\n    }\n  }\n"], ["\n  query FindProduct($id: String!) {\n    product(id: $id) {\n      id\n      brand\n      category\n      gallery\n      description\n      name\n      prices {\n        amount\n        currency {\n          label\n          symbol\n        }\n      }\n      attributes {\n        name\n        items {\n          value\n          displayValue\n        }\n      }\n    }\n  }\n"])));
var GetDescriptionOfProduct = function (id) {
    var _a = (0, client_1.useQuery)(DESCRIPTION_OF_PRODUCT, {
        variables: { id: id },
    }), error = _a.error, loading = _a.loading, data = _a.data;
    return { error: error, loading: loading, data: data };
};
exports.GetDescriptionOfProduct = GetDescriptionOfProduct;
var GetProducts = function () {
    var _a = (0, client_1.useQuery)(ALL_PRODUCTS), error = _a.error, loading = _a.loading, data = _a.data;
    return { error: error, loading: loading, data: data };
};
exports.GetProducts = GetProducts;
var useGetCurrencies = function () {
    var _a = (0, client_1.useQuery)(GET_ALL_CURRENCIES), error = _a.error, loading = _a.loading, data = _a.data;
    return { error: error, loading: loading, data: data };
};
exports.useGetCurrencies = useGetCurrencies;
var templateObject_1, templateObject_2, templateObject_3;
