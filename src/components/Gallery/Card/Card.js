import { Box } from "../../Box";
import { OutOfStock } from "../OutOfStock";
import { ProductImage, CardText, CardLink } from "./Card.style";

import style from "./Card.module.css";
import { useLocation } from "react-router";
import GetPrice from "../../Price/Price";

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
      <Box width="330px" height="354px" position="relative">
        <ProductImage src={gallery[0]} alt={name} />

        {!inStock && <OutOfStock />}
      </Box>
      <Box mt="24px">
        <CardText>{name}</CardText>
        <p className={style.cardPrice}>
          {amount} {symbol}
        </p>
      </Box>
    </CardLink>
  );
}
