import { Box } from "../../../Box";
import ProductDetailedInfo from "../../../ProductInfo/ProductInfo";

export default function ProductInfo({ image, alt }) {
  return (
    <Box display="flex">
      <Box className="right-sidebar-image">
        <img src={image} alt={alt} width="610" height="510" />
      </Box>
      <ProductDetailedInfo />
    </Box>
  );
}
