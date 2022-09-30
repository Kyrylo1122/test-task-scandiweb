"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../../../Box");
var GalleryLeftSideBar_style_1 = require("./GalleryLeftSideBar.style");
function GalleryLeftSideBar(_a) {
    var photos = _a.photos, alt = _a.alt, onClick = _a.onClick;
    return (<Box_1.Box as="ul" display="inline-flex" flexDirection="column" margin="-20px">
      {photos.map(function (photo) {
            return (<GalleryLeftSideBar_style_1.ImageItem key={photo} onClick={function () { return onClick(photo); }}>
            <img src={photo} alt={alt} width="80" height="80"/>
          </GalleryLeftSideBar_style_1.ImageItem>);
        })}
    </Box_1.Box>);
}
exports.default = GalleryLeftSideBar;
