import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";
import "./Checkout.css";

function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  function handlePlaceOrder() {
    const orderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    clearCart();
    navigate("/thank-you", {
      state: { orderId, paymentMethod, total: cartTotal },
    });
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page checkout-empty">
        <p>Your cart is empty. Add items from the menu first.</p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-section">
        <h2 className="checkout-section-title">Order Summary</h2>
        <div className="checkout-order-list">
          {cartItems.map((item) => (
            <div className="checkout-order-row" key={`${item.id}-${item.size}`}>
              <span>
                {item.title} ({item.size}) × {item.quantity}
              </span>
              <span>{formatPrice(item.price * item.quantity)}</span>
            </div>
          ))}
        </div>
        <div className="checkout-total-row">
          <span>Total</span>
          <span>{formatPrice(cartTotal)}</span>
        </div>
      </div>

      <div className="checkout-section">
        <h2 className="checkout-section-title">Delivery Details</h2>
        <input
          type="text"
          className="checkout-input"
          placeholder="Delivery address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="tel"
          className="checkout-input"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="checkout-section">
        <h2 className="checkout-section-title">Payment Method</h2>
        <div className="payment-options">
          <button
            className={
              paymentMethod === "cod"
                ? "payment-card payment-card-active"
                : "payment-card"
            }
            onClick={() => setPaymentMethod("cod")}
          >
            <span className="payment-card-title">Cash on Delivery</span>
            <span className="payment-card-desc">Pay when your order arrives</span>
          </button>

          <button
            className={
              paymentMethod === "jazzcash"
                ? "payment-card payment-card-active"
                : "payment-card"
            }
            onClick={() => setPaymentMethod("jazzcash")}
          >
            <span className="payment-card-title">JazzCash</span>
            <span className="payment-card-desc">Pay securely with JazzCash</span>
          </button>
        </div>
      </div>

      <button className="place-order-btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;