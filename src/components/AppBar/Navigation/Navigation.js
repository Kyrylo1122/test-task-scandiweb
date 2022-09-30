import { GetProducts } from "../../Api/Api";
import { Box } from "../../Box";
import Loading from "../../Loading/Loading";
import { NavigationLink, NavigationItem } from "./Navigation.style";

export default function Navigation() {
  const { error, loading, data } = GetProducts();
  if (error) {
    return <p>Error:(</p>;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <Box as="ul" display="flex" m={-3}>
      {data?.categories?.map(({ name }) => (
        <NavigationItem key={name}>
          <NavigationLink to={name === "all" ? "/" : name} state={name}>
            {name}
          </NavigationLink>
        </NavigationItem>
      ))}
    </Box>
  );
}
