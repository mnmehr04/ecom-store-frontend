import { HomePage } from "./HomePage";
import { Cart } from "./Cart";
import { Orders } from "./Orders";
import { Tracking } from "./Tracking";
import { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import "./checkout/checkout-header.css";
import "./checkout/checkout.css";
import { Routes, Route } from "react-router";

function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    const response = await axios.get(
      "https://e-comm-store-backend-production.up.railway.app/api/cart-items?expand=product"
    );
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    //<><HomePage /></>
    <Routes>
      <Route
        path="index.html"
        element={<HomePage cart={cart} loadCart={loadCart} />}
      />
      <Route
        path="/checkout.html"
        element={<Cart cart={cart} loadCart={loadCart} />}
      />
      <Route
        path="/orders.html"
        element={<Orders cart={cart} loadCart={loadCart} />}
      />
      <Route path="/tracking.html" element={<Tracking />} />
    </Routes>
  );
}

export default App;
