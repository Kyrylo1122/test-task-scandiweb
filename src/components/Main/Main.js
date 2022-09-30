import { Outlet } from "react-router-dom";
import { Box } from "../Box";
export const Main = () => {
  return (
    <Box as="section" paddingTop="40px">
      <Outlet />
    </Box>
  );
};
