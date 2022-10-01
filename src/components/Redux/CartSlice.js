import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { toast } from "react-toastify";
import { FixedTotalAmount } from "../tools/FixedTotalAmount";
import { findPrice } from "../tools/FindPrice";
const persistConfig = { key: "contacts", storage };

const initialState = {
  cartItem: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    equalCurrency(state, action) {
      const arrayWithNewPrice = state.cartItem.map((item) => {
        const newPrice = findPrice(item.prices, action.payload.symbol);

        item.amount = newPrice.amount;
        item.symbol = newPrice.currency.symbol;
        return item;
      });
      state.cartItem = arrayWithNewPrice;
    },
    addToCart(state, action) {
      const isExist = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (isExist >= 0) {
        state.cartItem[isExist].cartQuantity += 1;
        toast(`${action.payload.name} added to cart`, {
          autoClose: 3000,
        });

        return;
      }
      const tempProduct = { ...action.payload, cartQuantity: 1 };
      state.cartItem.push(tempProduct);
      toast(`You added ${action.payload.name} to cart`, {
        autoClose: 3000,
      });
    },
    addPrice(state, action) {
      const index = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.cartItem[index].amount = action.payload.amount;
        state.cartItem[index].symbol = action.payload.symbol;
      }
    },

    removeFromCart(state, action) {
      const nextCartItems = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItem = nextCartItems;
    },
    clearCart(state) {
      state.cartItem = [];
    },
    increaseQuantity(state, action) {
      const searchindIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItem[searchindIndex].cartQuantity += 1;
    },
    decreaseQuantity(state, action) {
      const searchindIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItem[searchindIndex].cartQuantity -= 1;
      if (state.cartItem[searchindIndex].cartQuantity === 0) {
        const nextCartItems = state.cartItem.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItem = nextCartItems;
      }
    },
    getTotal(state) {
      let { total, quantity } = state.cartItem.reduce(
        (cartTotal, item) => {
          const { amount, cartQuantity } = item;

          cartTotal.total += amount * cartQuantity;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        { total: 0, quantity: 0 }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = FixedTotalAmount(total);
    },
  },
});

export const persistedContactsReducer = persistReducer(
  persistConfig,
  CartSlice.reducer
);
export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  addPrice,
  getTotal,
  addSymbol,
  equalCurrency,
} = CartSlice.actions;
