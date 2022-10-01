import { useDispatch } from "react-redux";
import { Box } from "../../Box";
import {
  decreaseQuantity,
  getTotal,
  increaseQuantity,
  removeFromCart,
} from "../../Redux/CartSlice";
import { FixedTotalAmount } from "../../tools/FixedTotalAmount";
import { GridContainer } from "../Cart.style";
import {
  CartItemsPrice,
  CartItemsQuantity,
  CartItemsQuantityBtn,
  CartItemsRemoveBtn,
  CartItemsText,
  CartItemsTitle,
} from "./CartItems.style";

export default function CartItemsList({ items }) {
  const dispatch = useDispatch();

  return items?.map(
    ({ id, brand, gallery, cartQuantity, name, amount, symbol }) => (
      <Box borderBottom="1px solid #5ECE7B" key={id}>
        <GridContainer>
          <Box display="flex" alignItems="center">
            <Box>
              <img src={gallery[0]} alt={id} width="200px" />
            </Box>
            <Box ml="10px">
              <CartItemsTitle>{name}</CartItemsTitle>
              <CartItemsText>{brand}</CartItemsText>
              <CartItemsRemoveBtn
                onClick={() => {
                  dispatch(removeFromCart({ id }));
                  dispatch(getTotal());
                }}
              >
                Remove
              </CartItemsRemoveBtn>
            </Box>
          </Box>

          <Box>
            <CartItemsPrice>
              {amount} {symbol}{" "}
            </CartItemsPrice>
          </Box>
          <Box display="flex" alignItems="center">
            <CartItemsQuantityBtn
              onClick={() => {
                dispatch(decreaseQuantity({ id }));
                dispatch(getTotal());
              }}
            >
              -
            </CartItemsQuantityBtn>
            <CartItemsQuantity>{cartQuantity}</CartItemsQuantity>
            <CartItemsQuantityBtn
              onClick={() => {
                dispatch(increaseQuantity({ id }));
                dispatch(getTotal());
              }}
            >
              +
            </CartItemsQuantityBtn>
          </Box>
          <Box>
            <CartItemsPrice>
              {" "}
              {FixedTotalAmount(cartQuantity * amount)}
              {symbol}
            </CartItemsPrice>
          </Box>
        </GridContainer>
      </Box>
    )
  );
}
