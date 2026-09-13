import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import menuData from "../data/menuData";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";
import "./ProductDetails.css";

const allItems = menuData.flatMap((section) => section.items);
const sizes = ["Regular", "Large", "Extra Large"];

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = allItems.find((item) => item.id === id);

  const [selectedSize, setSelectedSize] = useState("Regular");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-not-found">
        <p>Product not found.</p>
      </div>
    );
  }

  const originalPrice = Math.round(product.price / 0.75);
  const discountPercent = 25;

  function handleDecrease() {
    setQuantity((q) => Math.max(1, q - 1));
  }

  function handleIncrease() {
    setQuantity((q) => q + 1);
  }

  function handleAddToCart() {
    addToCart({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      size: selectedSize,
      quantity,
    });
    navigate("/cart");
  }

  return (
    <div className="product-details-page">
      <div className="product-details-card">
        <div className="product-image-col">
          <div className="product-image-wrap">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <button className="product-search-btn" aria-label="Zoom image">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="currentColor"
                  d="M10 2a8 8 0 1 0 4.9 14.32l4.39 4.39 1.42-1.42-4.39-4.39A8 8 0 0 0 10 2zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12z"
                />
              </svg>
            </button>
            <div className="product-rating-pill">
              <svg viewBox="0 0 24 24" width="13" height="13">
                <path
                  fill="#F5C451"
                  d="M12 2l2.9 6.26 6.9.6-5.2 4.6 1.6 6.78L12 16.9l-6.2 3.34 1.6-6.78-5.2-4.6 6.9-.6z"
                />
              </svg>
              <span>
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>
        </div>

        <div className="product-info-col">
          <span className="best-seller-badge">Best Seller</span>

          <h1 className="product-title">{product.title}</h1>

          <div className="product-rating-row">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} viewBox="0 0 24 24" width="16" height="16">
                <path
                  fill="#F5C451"
                  d="M12 2l2.9 6.26 6.9.6-5.2 4.6 1.6 6.78L12 16.9l-6.2 3.34 1.6-6.78-5.2-4.6 6.9-.6z"
                />
              </svg>
            ))}
            <span className="product-rating-value">{product.rating}</span>
            <span className="product-review-count">
              ({product.reviews} reviews)
            </span>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-price-row">
            <span className="product-price">{formatPrice(product.price)}</span>
            <span className="product-original-price">
              {formatPrice(originalPrice)}
            </span>
            <span className="product-discount-badge">
              {discountPercent}% off
            </span>
          </div>

          <div className="product-option-group">
            <span className="product-option-label">Size</span>
            <div className="product-size-options">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={
                    size === selectedSize
                      ? "size-btn size-btn-active"
                      : "size-btn"
                  }
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-option-group">
            <span className="product-option-label">Quantity</span>
            <div className="quantity-stepper">
              <button
                className="quantity-btn"
                onClick={handleDecrease}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="quantity-value">{quantity}</span>
              <button
                className="quantity-btn"
                onClick={handleIncrease}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <div className="product-action-row">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="currentColor"
                  d="M7 4h-2l-.94 2H2v2h1.06l2.36 8.48A2 2 0 0 0 7.34 18H17a1 1 0 0 0 0-2H7.34l-.36-1.3.36-.03 10-1a1 1 0 0 0 .89-.75l1.5-6A1 1 0 0 0 18.75 6H5.53l-.4-1.4A1 1 0 0 0 4.16 4H7zm2 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm8 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                />
              </svg>
              Add to Cart
            </button>
            <button className="add-to-wishlist-btn">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M12 21s-7.5-4.6-10-9.3C.4 8.2 2 4.5 5.6 4.1c2-.2 3.7.8 4.9 2.6 1.2-1.8 2.9-2.8 4.9-2.6 3.6.4 5.2 4.1 3.6 7.6C19.5 16.4 12 21 12 21z"
                />
              </svg>
              Add to Wishlist
            </button>
          </div>

          <div className="product-features-row">
            <div className="feature-item">
              <span className="feature-icon feature-icon-green">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    fill="currentColor"
                    d="M12 2C7 2 3 6 3 11c0 4 5 11 9 11s9-7 9-11c0-5-4-9-9-9zm0 4c2.8 0 5 2.2 5 5 0 1.7-.9 3.4-2 4.7-.3-2.6-1.6-4.8-3-6.2 1.6.4 3 1.7 3.6 3.3C15.9 11.3 14.6 10 13 9.5c1 1.6 1.6 3.6 1.4 5.6-.9-1.9-2.4-3.5-4.4-4.3 1.1 1.7 1.6 3.8 1.3 5.9C9.6 15.1 8 12.7 8 11c0-2.8 2.2-5 4-5z"
                  />
                </svg>
              </span>
              <span className="feature-label">Fresh Ingredients</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon feature-icon-amber">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    fill="currentColor"
                    d="M12 2a4 4 0 0 1 4 4c0 .4-.1.8-.2 1.2A5 5 0 0 1 20 12v1H4v-1a5 5 0 0 1 4.2-4.8A4 4 0 0 1 8 6a4 4 0 0 1 4-4zM4 15h16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2z"
                  />
                </svg>
              </span>
              <span className="feature-label">Chef's Special</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon feature-icon-blue">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    fill="currentColor"
                    d="M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5z"
                  />
                </svg>
              </span>
              <span className="feature-label">Hygienic Preparation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;