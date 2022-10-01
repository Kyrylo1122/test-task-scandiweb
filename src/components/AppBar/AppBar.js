import { Box } from "../Box";
import Logo from "../Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Actions from "./Actions/Actions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AppBar() {
  const currency = useSelector((state) => state.currency);
  return (
    <Box as="header" boxShadow="rgba(0, 0, 0, 0.15) 0px 3px 10px">
      <Box
        className="container"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="relative"
      >
        <Box as="nav">{<Navigation />}</Box>
        <Box>
          <Link to="/">
            <Logo />
          </Link>
        </Box>
        <Box>
          <Actions symbol={currency.symbol} />
        </Box>
      </Box>
    </Box>
  );
}
