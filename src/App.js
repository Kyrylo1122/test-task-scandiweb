import "./App.css";
import { Box } from "./components/Box";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { WomenProducts } from "./components/WomenProducts";

class App extends Component {
  render() {
    return (
      <Box display="flex" flexDirection="column">
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="women" element={<WomenProducts />} />
            <Route path="men" element={<h1>Men products</h1>} />
            <Route path="kids" element={<h1>Kids products</h1>} />
          </Route>
        </Routes>
      </Box>
    );
  }
}

export default App;
