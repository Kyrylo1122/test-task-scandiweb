"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var Box_1 = require("./components/Box");
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = __importDefault(require("./components/Layout/Layout"));
var GlobalStyle_1 = require("./GlobalStyle");
var ProductDescription_1 = __importDefault(require("./components/Gallery/ProductDescription/ProductDescription"));
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var Cart_1 = __importDefault(require("./components/Cart/Cart"));
var Tech_1 = __importDefault(require("./components/pages/Tech/Tech"));
var AllCategories_1 = __importDefault(require("./components/pages/AllCategories/AllCategories"));
var Clothes_1 = __importDefault(require("./components/pages/Clothes/Clothes"));
var CheckOut_1 = __importDefault(require("./components/pages/CheckOut/CheckOut"));
function App() {
    return (<Box_1.Box display="flex" flexDirection="column">
      <GlobalStyle_1.GlobalStyle />
      <react_toastify_1.ToastContainer />
      <Layout_1.default />
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<AllCategories_1.default />}/>
        <react_router_dom_1.Route path="/:id" element={<ProductDescription_1.default />}/>
        <react_router_dom_1.Route path="cart" element={<Cart_1.default />}/>

        <react_router_dom_1.Route path="clothes" element={<Clothes_1.default />}/>
        <react_router_dom_1.Route path="tech" element={<Tech_1.default />}/>
        <react_router_dom_1.Route path="checkout" element={<CheckOut_1.default />}/>
      </react_router_dom_1.Routes>
    </Box_1.Box>);
}
exports.default = App;
