"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppBar_1 = __importDefault(require("../AppBar/AppBar"));
var Box_1 = require("../Box");
var Main_1 = require("../Main/Main");
function Layout() {
    return (<Box_1.Box>
      <AppBar_1.default />
      <Main_1.Main />
    </Box_1.Box>);
}
exports.default = Layout;
