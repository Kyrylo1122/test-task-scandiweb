import { GetProducts } from "../../Api/Api";
import { Box } from "../../Box";
import Card from "../../Gallery/Card/Card";
import { ProductCard } from "../../Gallery/Card/Card.style";
import Loading from "../../Loading/Loading";

export default function AllCategoriesCards() {
  const { error, loading, data } = GetProducts();
  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;
  const { products } = data?.categories?.find(
    (category) => category.name === "all"
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
