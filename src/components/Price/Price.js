import { useSelector } from "react-redux";

export default function GetPrice(prices) {
  const currency = useSelector((state) => state.currency);

  const {
    amount,
    currency: { symbol },
  } = prices.find((price) => price.currency.symbol === currency.symbol);
  return { amount, symbol };
}
