import { Box } from "../Box";
import { OutOfStock } from "../Gallery/OutOfStock";
import { ProductImage, CardText, CardLink, CardPrice } from "./Card.style";

import { useLocation } from "react-router";
import GetPrice from "../tools/GetPrice";

export default function Card({ product }) {
  const { gallery, inStock, id, name, prices } = product;
  const { amount, symbol } = GetPrice(prices);
  const location = useLocation();

  return (
    <CardLink
      state={{ from: location }}
      to={`/${id}`}
      style={!inStock ? { pointerEvents: "none" } : {}}
    >
      <Box width="100%" height="354px" position="relative">
        <ProductImage src={gallery[0]} alt={name} />

        {!inStock && <OutOfStock />}
      </Box>
      <Box mt="24px">
        <CardText>{name}</CardText>
        <CardPrice>
          {amount} {symbol}
        </CardPrice>
      </Box>
    </CardLink>
  );
}
