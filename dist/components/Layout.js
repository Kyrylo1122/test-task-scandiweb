"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var AppBar_1 = __importDefault(require("./AppBar/AppBar"));
var Box_1 = require("./Box");
function Layout() {
    return (<Box_1.Box>
      <AppBar_1.default />
      <react_router_dom_1.Outlet />
    </Box_1.Box>);
}
exports.default = Layout;
