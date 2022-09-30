"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../../Box");
function LeftSideBar(_a) {
    var array = _a.array, alt = _a.alt;
    return (<Box_1.Box as="ul" border="normal" display="inline-flex" flexDirection="column" margin="-20px">
      {array.map(function (photo) {
            return (<Box_1.Box as="li" margin="20px" key={photo}>
            <img src={photo} alt={alt} width="80px" height="80px"/>
          </Box_1.Box>);
        })}
    </Box_1.Box>);
}
exports.default = LeftSideBar;
