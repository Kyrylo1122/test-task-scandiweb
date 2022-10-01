import { GetProducts } from "../../Api/Api";
import { Box } from "../../Box";
import Card from "../../Card/Card";
import { ProductCard } from "../../Card/Card.style";
import Loading from "../../Loading/Loading";

export default function TechCards() {
  const { error, loading, data } = GetProducts();
  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;
  const { products } = data?.categories?.find(
    (category) => category.name === "tech"
  );
  return (
    <Box as="ul" display="flex" flexWrap="wrap" m="-20px" alignItems="center">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id}>
            {<Card product={product} />}
          </ProductCard>
        ))}
    </Box>
  );
}
