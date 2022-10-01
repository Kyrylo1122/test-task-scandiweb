import { useContext, useEffect } from "react";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import { Box } from "../Box";
import { ProductContext } from "../tools/Context/Context";
import GetPrice from "../tools/GetPrice";
import { useDispatch } from "react-redux";

import {
  ProductTitle,
  ProductText,
  ProductPrice,
  ProductDescription,
} from "./ProductInfo.style";
import style from "./ProductInfo.module.css";
import { addToCart, addPrice, getTotal } from "../Redux/CartSlice";

export default function ProductInfo() {
  const product = useContext(ProductContext);
  const { description, name, brand, prices, id } = product;
  const { amount, symbol } = GetPrice(prices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPrice({ id, amount, symbol }));
  }, [amount, dispatch, id, prices, symbol]);

  const onBtnSubmit = () => {
    const newProduct = { ...product, amount, symbol };
    dispatch(addToCart(newProduct));
    dispatch(getTotal());
  };

  return (
    <Box>
      <ProductTitle>{name}</ProductTitle>
      <ProductText>{brand}</ProductText>
      <ProductPrice>Price:</ProductPrice>
      <p className={style.productPrice}>
        {amount} {symbol}
      </p>
      <AddToCartBtn onSubmit={onBtnSubmit} />
      <ProductDescription>{description}</ProductDescription>
    </Box>
  );
}
