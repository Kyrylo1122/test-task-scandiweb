"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_1 = require("react-router");
var Box_1 = require("../Box");
var AllCategoriesCards_1 = __importDefault(require("../pages/AllCategories/AllCategoriesCards"));
var Gallery_style_1 = require("./Gallery.style");
function AllCategories() {
    var state = (0, react_router_1.useLocation)().state;
    return (<Box_1.Box className="container">
      <Gallery_style_1.GalleryTitle>Category: {state}</Gallery_style_1.GalleryTitle>
      <AllCategoriesCards_1.default />
    </Box_1.Box>);
}
exports.default = AllCategories;
