"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../Box");
var Logo_1 = __importDefault(require("../Logo/Logo"));
var Navigation_1 = __importDefault(require("./Navigation/Navigation"));
var Actions_1 = __importDefault(require("./Actions/Actions"));
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
function AppBar() {
    var currency = (0, react_redux_1.useSelector)(function (state) { return state.currency; });
    return (<Box_1.Box as="header" boxShadow="rgba(0, 0, 0, 0.15) 0px 3px 10px">
      <Box_1.Box className="container" display="flex" justifyContent="space-between" alignItems="center" position="relative">
        <Box_1.Box as="nav">{<Navigation_1.default />}</Box_1.Box>
        <Box_1.Box>
          <react_router_dom_1.Link to="/">
            <Logo_1.default />
          </react_router_dom_1.Link>
        </Box_1.Box>
        <Box_1.Box>
          <Actions_1.default symbol={currency.symbol}/>
        </Box_1.Box>
      </Box_1.Box>
    </Box_1.Box>);
}
exports.default = AppBar;
