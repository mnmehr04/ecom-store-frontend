import "./header.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "./Product.jsx";
export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://e-comm-store-backend-production.up.railway.app/api/products"
      );
      setProducts(response.data);
    };
    fetch();
  }, []);

  let totalQuantity = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity;
  });

  return (
    <>
      <div className="header">
        <div className="left-section">
          <a href="/" className="header-link">
            <img className="logo" src="images/logo-white.png" />
            <img className="mobile-logo" src="images/mobile-logo-white.png" />
          </a>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <a className="orders-link header-link" href="/orders">
            <span className="orders-text">Orders</span>
          </a>

          <a className="cart-link header-link" href="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </a>
        </div>
      </div>

      <div className="home-page">
        <div className="products-grid">
          {products.map((products) => {
            return (
              <Product
                key={products.id}
                products={products}
                loadCart={loadCart}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
