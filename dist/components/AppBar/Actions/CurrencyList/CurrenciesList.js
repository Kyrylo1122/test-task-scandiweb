"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../../../Box");
var Api_1 = require("../../../Api/Api");
var react_redux_1 = require("react-redux");
var CurrencySlice_1 = require("../../../Redux/CurrencySlice");
var CurrencyList_style_1 = require("./CurrencyList.style");
var CartSlice_1 = require("../../../Redux/CartSlice");
function CurrenciesList(_a) {
    var _b;
    var onClose = _a.onClose;
    var dispatch = (0, react_redux_1.useDispatch)();
    var data = (0, Api_1.useGetCurrencies)().data;
    return (<CurrencyList_style_1.ModalCurrencyList>
      <Box_1.Box as="ul" display="flex" flexDirection="column">
        {(_b = data === null || data === void 0 ? void 0 : data.currencies) === null || _b === void 0 ? void 0 : _b.map(function (_a) {
            var symbol = _a.symbol, label = _a.label;
            return (<CurrencyList_style_1.CurrencyItem key={label} onClick={function () {
                    dispatch((0, CurrencySlice_1.handleChangeCurrency)(label));
                    dispatch((0, CurrencySlice_1.handleChangeCurrencySymbol)(symbol));
                    dispatch((0, CartSlice_1.equalCurrency)({ symbol: symbol }));
                    onClose();
                }}>
            <span>{symbol}</span>
            <span>{label}</span>
          </CurrencyList_style_1.CurrencyItem>);
        })}
      </Box_1.Box>
    </CurrencyList_style_1.ModalCurrencyList>);
}
exports.default = CurrenciesList;
