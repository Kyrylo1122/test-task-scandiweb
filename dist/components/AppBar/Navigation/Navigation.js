"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Api_1 = require("../../Api/Api");
var Box_1 = require("../../Box");
var Loading_1 = __importDefault(require("../../Loading/Loading"));
var Navigation_style_1 = require("./Navigation.style");
function Navigation() {
    var _a;
    var _b = (0, Api_1.GetProducts)(), error = _b.error, loading = _b.loading, data = _b.data;
    if (error) {
        return <p>Error:(</p>;
    }
    if (loading) {
        return <Loading_1.default />;
    }
    return (<Box_1.Box as="ul" display="flex" m={-3}>
      {(_a = data === null || data === void 0 ? void 0 : data.categories) === null || _a === void 0 ? void 0 : _a.map(function (_a) {
            var name = _a.name;
            return (<Navigation_style_1.NavigationItem key={name}>
          <Navigation_style_1.NavigationLink to={name === "all" ? "/" : name} state={name}>
            {name}
          </Navigation_style_1.NavigationLink>
        </Navigation_style_1.NavigationItem>);
        })}
    </Box_1.Box>);
}
exports.default = Navigation;
