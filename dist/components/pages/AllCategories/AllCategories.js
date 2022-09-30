"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../../Box");
var AllCategoriesCards_1 = __importDefault(require("./AllCategoriesCards"));
function AllCategories() {
    return (<Box_1.Box className="container">
      <AllCategoriesCards_1.default />
    </Box_1.Box>);
}
exports.default = AllCategories;
