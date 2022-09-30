"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../Box");
var AppBar_style_1 = require("./AppBar.style");
var ClothesByGender = [
    { id: 1, gender: "women", href: "women" },
    { id: 2, gender: "men", href: "men" },
    { id: 3, gender: "kids", href: "kids" },
];
function Navigation() {
    return (<Box_1.Box as="ul" display="flex" m={-3}>
      {ClothesByGender.map(function (_a) {
            var id = _a.id, gender = _a.gender, href = _a.href;
            return (<AppBar_style_1.NavigationItem key={id}>
          <AppBar_style_1.NavigationLink to={href}>{gender}</AppBar_style_1.NavigationLink>
        </AppBar_style_1.NavigationItem>);
        })}
    </Box_1.Box>);
}
exports.default = Navigation;
