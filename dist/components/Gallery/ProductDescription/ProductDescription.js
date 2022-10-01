"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var Box_1 = require("../../Box");
var Api_1 = require("../../Api/Api");
var GalleryLeftSideBar_1 = __importDefault(require("./GalleryLeftSideBar/GalleryLeftSideBar"));
var RightSideBar_1 = __importDefault(require("./RightSidebar/RightSideBar"));
var react_1 = require("react");
var Context_1 = require("../../tools/Context/Context");
var ProductDescription_style_1 = require("./ProductDescription.style");
var ti_1 = require("react-icons/ti");
var react_redux_1 = require("react-redux");
var Loading_1 = __importDefault(require("../../Loading/Loading"));
function ProductDescription() {
    var _a, _b;
    var location = (0, react_router_dom_1.useLocation)();
    var dispatch = (0, react_redux_1.useDispatch)();
    var id = (0, react_router_dom_1.useParams)().id;
    var _c = (0, Api_1.GetDescriptionOfProduct)(id), error = _c.error, loading = _c.loading, data = _c.data;
    var _d = (0, react_1.useState)(null), image = _d[0], setImage = _d[1];
    (0, react_1.useEffect)(function () {
        if (!data) {
            return;
        }
        setImage(data.product.gallery[0]);
    }, [data, dispatch]);
    if (loading)
        return <Loading_1.default />;
    if (error)
        return <p>Error :(</p>;
    var _e = data.product, brand = _e.brand, gallery = _e.gallery;
    return (<Box_1.Box>
      <Box_1.Box className="container">
        <ProductDescription_style_1.Return to={(_b = (_a = location === null || location === void 0 ? void 0 : location.state) === null || _a === void 0 ? void 0 : _a.from) !== null && _b !== void 0 ? _b : "./"}>
          <ti_1.TiArrowBackOutline />
          Return
        </ProductDescription_style_1.Return>

        <Box_1.Box display="flex">
          <GalleryLeftSideBar_1.default photos={gallery} alt={brand} onClick={setImage}/>

          <Context_1.ProductContext.Provider value={data === null || data === void 0 ? void 0 : data.product}>
            <RightSideBar_1.default image={image} alt={brand}/>
          </Context_1.ProductContext.Provider>
        </Box_1.Box>
      </Box_1.Box>
    </Box_1.Box>);
}
exports.default = ProductDescription;
