export const findPrice = (prices, symbol) => {
  return prices.find((price) => price.currency.symbol === symbol);
};
