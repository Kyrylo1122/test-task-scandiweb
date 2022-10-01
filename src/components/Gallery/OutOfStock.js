import { Box } from "../Box";
import { TextOutOfStock } from "../Card/Card.style";

export const OutOfStock = () => (
  <Box
    backgroundColor="rgba(255, 255, 255, 0.5)"
    width="100%"
    height="100%"
    display="block"
    position="absolute"
    top="0"
  >
    <TextOutOfStock>OUT OF STOCK</TextOutOfStock>
  </Box>
);
