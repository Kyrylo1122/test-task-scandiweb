import { NavigationLink } from "./AppBar.style";
import { Box } from "../Box";
import Logo from "../Logo/Logo";
const ClothesByGender = [
  { id: 1, gender: "women", href: "women" },
  { id: 2, gender: "men", href: "men" },
  { id: 3, gender: "kids", href: "kids" },
];
export default function AppBar() {
  return (
    <Box
      as="header"
      border="1px solid brown"
      display="flex"
      justifyContent="space-between"
    >
      <Box as="nav">
        <Box as="ul" display="flex">
          {ClothesByGender.map(({ id, gender, href }) => (
            <li key={id}>
              <NavigationLink to={href}>{gender}</NavigationLink>
            </li>
          ))}
        </Box>
      </Box>
      <Logo />
    </Box>
  );
}
