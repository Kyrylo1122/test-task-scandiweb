"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.equalCurrency = exports.addSymbol = exports.getTotal = exports.addPrice = exports.decreaseQuantity = exports.increaseQuantity = exports.clearCart = exports.removeFromCart = exports.addToCart = exports.persistedContactsReducer = exports.CartSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var storage_1 = __importDefault(require("redux-persist/lib/storage"));
var redux_persist_1 = require("redux-persist");
var react_toastify_1 = require("react-toastify");
var FixedTotalAmount_1 = require("../tools/FixedTotalAmount");
var FindPrice_1 = require("../tools/FindPrice");
var persistConfig = { key: "contacts", storage: storage_1.default };
var initialState = {
    cartItem: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};
exports.CartSlice = (0, toolkit_1.createSlice)({
    name: "cart",
    initialState: initialState,
    reducers: {
        equalCurrency: function (state, action) {
            var arrayWithNewPrice = state.cartItem.map(function (item) {
                var newPrice = (0, FindPrice_1.findPrice)(item.prices, action.payload.symbol);
                item.amount = newPrice.amount;
                item.symbol = newPrice.currency.symbol;
                return item;
            });
            state.cartItem = arrayWithNewPrice;
        },
        addToCart: function (state, action) {
            var isExist = state.cartItem.findIndex(function (item) { return item.id === action.payload.id; });
            if (isExist >= 0) {
                state.cartItem[isExist].cartQuantity += 1;
                (0, react_toastify_1.toast)("".concat(action.payload.name, " added to cart"), {
                    autoClose: 3000,
                });
                return;
            }
            var tempProduct = __assign(__assign({}, action.payload), { cartQuantity: 1 });
            state.cartItem.push(tempProduct);
            (0, react_toastify_1.toast)("You added ".concat(action.payload.name, " to cart"), {
                autoClose: 3000,
            });
        },
        addPrice: function (state, action) {
            var index = state.cartItem.findIndex(function (item) { return item.id === action.payload.id; });
            if (index >= 0) {
                state.cartItem[index].amount = action.payload.amount;
                state.cartItem[index].symbol = action.payload.symbol;
            }
        },
        removeFromCart: function (state, action) {
            var nextCartItems = state.cartItem.filter(function (item) { return item.id !== action.payload.id; });
            state.cartItem = nextCartItems;
        },
        clearCart: function (state) {
            state.cartItem = [];
        },
        increaseQuantity: function (state, action) {
            var searchindIndex = state.cartItem.findIndex(function (item) { return item.id === action.payload.id; });
            state.cartItem[searchindIndex].cartQuantity += 1;
        },
        decreaseQuantity: function (state, action) {
            var searchindIndex = state.cartItem.findIndex(function (item) { return item.id === action.payload.id; });
            state.cartItem[searchindIndex].cartQuantity -= 1;
            if (state.cartItem[searchindIndex].cartQuantity === 0) {
                var nextCartItems = state.cartItem.filter(function (item) { return item.id !== action.payload.id; });
                state.cartItem = nextCartItems;
            }
        },
        getTotal: function (state) {
            var _a = state.cartItem.reduce(function (cartTotal, item) {
                var amount = item.amount, cartQuantity = item.cartQuantity;
                cartTotal.total += amount * cartQuantity;
                cartTotal.quantity += cartQuantity;
                return cartTotal;
            }, { total: 0, quantity: 0 }), total = _a.total, quantity = _a.quantity;
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = (0, FixedTotalAmount_1.FixedTotalAmount)(total);
        },
    },
});
exports.persistedContactsReducer = (0, redux_persist_1.persistReducer)(persistConfig, exports.CartSlice.reducer);
exports.addToCart = (_a = exports.CartSlice.actions, _a.addToCart), exports.removeFromCart = _a.removeFromCart, exports.clearCart = _a.clearCart, exports.increaseQuantity = _a.increaseQuantity, exports.decreaseQuantity = _a.decreaseQuantity, exports.addPrice = _a.addPrice, exports.getTotal = _a.getTotal, exports.addSymbol = _a.addSymbol, exports.equalCurrency = _a.equalCurrency;
