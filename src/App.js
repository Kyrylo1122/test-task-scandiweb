import "./App.css";
import { Box } from "./components/Box";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { GlobalStyle } from "./GlobalStyle";
import ProductDescription from "./components/Gallery/ProductDescription/ProductDescription";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart/Cart";

import Tech from "./components/pages/Tech/Tech";
import AllCategories from "./components/pages/AllCategories/AllCategories";
import Clothes from "./components/pages/Clothes/Clothes";
import CheckOut from "./components/pages/CheckOut/CheckOut";

export default function App() {
  return (
    <Box display="flex" flexDirection="column">
      <GlobalStyle />
      <ToastContainer />
      <Layout />
      <Routes>
        <Route path="/" element={<AllCategories />} />
        <Route path="/:id" element={<ProductDescription />} />
        <Route path="cart" element={<Cart />} />

        <Route path="clothes" element={<Clothes />} />
        <Route path="tech" element={<Tech />} />
        <Route path="checkout" element={<CheckOut />} />
      </Routes>
    </Box>
  );
}
