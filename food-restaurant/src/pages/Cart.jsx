import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";
import "./Cart.css";

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page cart-empty">
        <p>Your cart is empty.</p>
        <Link to="/menu" className="browse-menu-btn">
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={`${item.id}-${item.size}`}>
            <img src={item.image} alt={item.title} className="cart-item-image" />

            <div className="cart-item-info">
              <h3 className="cart-item-title">{item.title}</h3>
              <p className="cart-item-size">Size: {item.size}</p>
              <p className="cart-item-price">{formatPrice(item.price)}</p>
            </div>

            <div className="cart-item-quantity">
              <button
                onClick={() =>
                  updateQuantity(item.id, item.size, item.quantity - 1)
                }
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() =>
                  updateQuantity(item.id, item.size, item.quantity + 1)
                }
              >
                +
              </button>
            </div>

            <span className="cart-item-subtotal">
              {formatPrice(item.price * item.quantity)}
            </span>

            <button
              className="cart-item-remove"
              onClick={() => removeFromCart(item.id, item.size)}
              aria-label="Remove item"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <span className="cart-summary-label">Total</span>
        <span className="cart-summary-value">{formatPrice(cartTotal)}</span>
      </div>

      <button className="checkout-btn" onClick={() => navigate("/checkout")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cart;