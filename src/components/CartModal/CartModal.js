import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "../Box";
import CartGallery from "../CartGallery/CartGallery";

import { clearCart, getTotal } from "../Redux/CartSlice";
import {
  CartLinkBtnFirst,
  CartLinkBtnSecond,
  ShoppingCartTitle,
  CardModal,
  ShoppingCartTotalTitle,
  Overlay,
  ShoppingCartText,
} from "./CartModal.style";
import EmptyCardModal from "./EmptyCardModal/EmptyCardModal";

export default function CartModal({ closeCart }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { symbol } = useSelector((state) => state.currency);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        closeCart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    dispatch(getTotal());
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cart, closeCart, dispatch]);

  return (
    <Overlay
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeCart();
        }
      }}
    >
      <CardModal>
        {cart.cartItem.length === 0 ? (
          <EmptyCardModal closeCart={closeCart} />
        ) : (
          <Box>
            <ShoppingCartTitle>
              My Bag<span> {cart.cartTotalQuantity} items</span>
            </ShoppingCartTitle>
            <CartGallery array={cart.cartItem} />
            <Box display="block">
              <ShoppingCartTotalTitle>
                Total:{" "}
                <span>
                  {cart.cartTotalAmount} {symbol}
                </span>
              </ShoppingCartTotalTitle>
              <ShoppingCartText>
                Taxes and shipping are calculated at total price
              </ShoppingCartText>
            </Box>
            <Box display="flex" mt="40px">
              <CartLinkBtnSecond
                to="cart"
                onClick={() => {
                  closeCart();
                }}
              >
                View Bag
              </CartLinkBtnSecond>
              <Box ml="10px">
                <CartLinkBtnFirst
                  to="/checkout"
                  onClick={() => {
                    dispatch(clearCart());

                    dispatch(getTotal());
                    closeCart();
                  }}
                >
                  Check out
                </CartLinkBtnFirst>
              </Box>
            </Box>
          </Box>
        )}
      </CardModal>
    </Overlay>
  );
}
