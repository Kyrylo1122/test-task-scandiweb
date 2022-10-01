import { useDispatch, useSelector } from "react-redux";
import { Box } from "../Box";
import {
  CartLinkBtnFirst,
  CartLinkBtnSecond,
} from "../CartModal/CartModal.style";
import EmptyCardModal from "../CartModal/EmptyCardModal/EmptyCardModal";
import { clearCart, getTotal } from "../Redux/CartSlice";
import {
  GridContainer,
  CartGridTitles,
  CartSummaryTitles,
  CartSummaryText,
  CartSummarySubTitle,
  ClearCartBtn,
} from "./Cart.style";
import CartItemsList from "./CartItemsList/CartItems";

export default function Cart() {
  const dispatch = useDispatch();
  const { cartItem, cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state.cart
  );

  const { symbol } = useSelector((state) => state.currency);
  if (!cartItem.length) {
    return (
      <Box className="container">
        <EmptyCardModal />
      </Box>
    );
  }
  return (
    <Box className="container" display="flex" flexDirection="column">
      <GridContainer>
        <CartGridTitles>Product</CartGridTitles>
        <CartGridTitles>Price</CartGridTitles>
        <CartGridTitles>Quantity</CartGridTitles>
        <CartGridTitles>Total</CartGridTitles>
      </GridContainer>
      <CartItemsList items={cartItem} />
      <Box>
        <ClearCartBtn
          onClick={() => {
            dispatch(clearCart());
            dispatch(getTotal());
          }}
        >
          Clear cart
        </ClearCartBtn>
      </Box>
      <Box
        className="cart-summary"
        maxWidth="600px"
        width="100%"
        ml="auto"
        borderRadius="5px"
        p="5px"
      >
        <CartSummaryTitles>
          Subtotal:
          <label>
            {cartTotalAmount} {symbol}
          </label>
        </CartSummaryTitles>
        <CartSummarySubTitle>
          Quantity:
          <label>{cartTotalQuantity}</label>
        </CartSummarySubTitle>
        <CartSummaryText>
          Taxes and shipping are calculated at total price
        </CartSummaryText>
        <Box display="flex">
          <CartLinkBtnSecond to="/">Continue shopping</CartLinkBtnSecond>
          <Box ml="10px">
            <CartLinkBtnFirst
              to="/checkout"
              onClick={() => {
                dispatch(clearCart());
                dispatch(getTotal());
              }}
            >
              Check out
            </CartLinkBtnFirst>{" "}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
