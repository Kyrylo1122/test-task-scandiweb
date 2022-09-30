import { GetProducts } from "../../Api/Api";
import { Box } from "../../Box";
import Card from "../../Gallery/Card/Card";
import { ProductCard } from "../../Gallery/Card/Card.style";

export default function TechCards() {
  const { error, loading, data } = GetProducts();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { products } = data?.categories?.find(
    (category) => category.name === "tech"
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
