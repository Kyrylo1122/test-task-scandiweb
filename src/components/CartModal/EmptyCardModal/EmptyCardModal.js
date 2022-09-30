import { Box } from "../../Box";
import { CartLinkBtnSecond } from "../CartModal.style";
import { EmptyCardModalText } from "./EmptyCardModal.style";

export default function EmptyCardModal({ closeCart }) {
  return (
    <Box>
      <h2>Shopping Cart</h2>
      <EmptyCardModalText> Your Cart is currently empty</EmptyCardModalText>
      <CartLinkBtnSecond to="/" onClick={() => closeCart()}>
        Start shopping
      </CartLinkBtnSecond>
    </Box>
  );
}
