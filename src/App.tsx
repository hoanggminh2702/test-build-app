import "antd/dist/antd.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/details";
import Home from "./pages/home";
import Products from "./pages/products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="/products/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
