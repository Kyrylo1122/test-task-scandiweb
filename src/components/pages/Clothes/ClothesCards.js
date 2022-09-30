import { Box } from "../../Box";

const { GetProducts } = require("../../Api/Api");
const { default: Card } = require("../../Gallery/Card/Card");
const { ProductCard } = require("../../Gallery/Card/Card.style");

export default function ClothesCards() {
  const { error, loading, data } = GetProducts();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { products } = data?.categories?.find(
    (category) => category.name === "clothes"
  );
  return (
    <Box as="ul" display="flex" flexWrap="wrap" m="-20px">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id}>
            {<Card product={product} />}
          </ProductCard>
        ))}
    </Box>
  );
}
