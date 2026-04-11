import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import Support from "./pages/Support";

function App() {
  return (
    <Routes>

      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* All Products Page */}
      <Route path="/products" element={<Products />} />

      {/* Individual Product Page */}
      <Route path="/product/:id" element={<ProductPage />} />

      {/* Support Page */}
      <Route path="/support" element={<Support />} />

    </Routes>
  );
}

export default App;