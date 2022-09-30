"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var react_router_dom_1 = require("react-router-dom");
var Box_1 = require("../Box");
var Main = function () {
    return (<Box_1.Box as="section" paddingTop="40px">
      <react_router_dom_1.Outlet />
    </Box_1.Box>);
};
exports.Main = Main;
