import { Box } from "../Box";
import CartCard from "../CartModal/CartCard/CartCard";
export default function CartGallery({ array }) {
  return (
    <Box as="ul" display="flex" flexDirection="column">
      {array.map((item) => (
        <Box as="li" key={item.id} borderBottom="1px solid grey">
          <CartCard item={item} />
        </Box>
      ))}
    </Box>
  );
}
