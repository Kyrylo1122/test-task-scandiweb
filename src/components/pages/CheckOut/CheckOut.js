import { Box } from "../../Box";
import { CheckOutText, CheckOutTitle } from "./Checkout.style";

export default function CheckOut() {
  return (
    <Box display="flex">
      <Box
        border="1px solid #5ECE7B"
        m="0 auto"
        width="500px"
        height="500px"
        borderRadius="50%"
        textAlign="center"
      >
        <CheckOutTitle>Thank you! </CheckOutTitle>
        <CheckOutText>for your order</CheckOutText>
      </Box>
    </Box>
  );
}
