import { Box } from "../../Box";
import {
  CartCardText,
  CartCardQuantityBtn,
  CartCardRemoveBtn,
  CartCardPrice,
  CartCardTitle,
} from "./CartCard.style";
import { useDispatch } from "react-redux";
import { getTotal, removeFromCart } from "../../Redux/CartSlice";
import { increaseQuantity, decreaseQuantity } from "../../Redux/CartSlice";
import { useEffect } from "react";

export default function CartCard({ item }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch]);

  const { id, brand, gallery, cartQuantity, name, amount, symbol } = item;
  return (
    <Box display="flex" m="20px">
      <Box className="meta" display="flex" flexDirection="column">
        <CartCardTitle>{brand}</CartCardTitle>
        <CartCardText>{name}</CartCardText>
        <CartCardPrice>
          <label>
            {amount} {symbol}
          </label>
        </CartCardPrice>

        <CartCardRemoveBtn
          onClick={() => {
            dispatch(removeFromCart({ id }));
          }}
        >
          Remove
        </CartCardRemoveBtn>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        ml="auto"
      >
        <CartCardQuantityBtn
          onClick={() => {
            dispatch(decreaseQuantity({ id }));
            dispatch(getTotal());
          }}
        >
          -
        </CartCardQuantityBtn>
        <span>{cartQuantity}</span>
        <CartCardQuantityBtn
          onClick={() => {
            dispatch(increaseQuantity({ id }));
            dispatch(getTotal());
          }}
        >
          +
        </CartCardQuantityBtn>
      </Box>

      <Box ml="8px">
        <img src={gallery[0]} alt={brand} width="120" />
      </Box>
    </Box>
  );
}
