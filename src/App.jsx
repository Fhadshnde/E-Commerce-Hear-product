import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./compoents/About";
import ProductList from "./compoents/ProductList";
import CartPage from "./compoents/cartpage";
import Contact from "./compoents/Contact";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<Contact />} />        </Routes>
      </div>
    </Router>
  );
}

export default App;
