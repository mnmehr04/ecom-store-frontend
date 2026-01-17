import { useState } from "react";
import axios from "axios";
export function Product({ products, loadCart }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image" src={products.image} />
      </div>

      <div className="product-name limit-text-to-2-lines">{products.name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={`images/ratings/rating-${products.rating.stars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {products.rating.count}
        </div>
      </div>

      <div className="product-price">
        ${(products.priceCents / 100).toFixed(2)}
      </div>

      <div className="product-quantity-container">
        <select
          value={quantity}
          onChange={(event) => {
            setQuantity(Number(event.target.value));
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      <div className="added-to-cart">
        <img src="images/icons/checkmark.png" />
        Added
      </div>

      <button
        className="add-to-cart-button button-primary"
        onClick={async () => {
          await axios.post(
            "https://e-comm-store-backend-production.up.railway.app/api/cart-items",
            {
              productId: products.id,
              quantity: quantity,
            }
          );
          await loadCart();
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
