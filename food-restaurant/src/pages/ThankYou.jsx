import { Link, useLocation } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import "./ThankYou.css";

function ThankYou() {
  const location = useLocation();
  const { orderId, paymentMethod, total } = location.state || {};

  const paymentLabel =
    paymentMethod === "jazzcash" ? "JazzCash" : "Cash on Delivery";

  return (
    <div className="thank-you-page">
      <div className="thank-you-icon">
        <svg viewBox="0 0 24 24" width="36" height="36">
          <path
            fill="none"
            stroke="#2f9e44"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 12l6 6L20 6"
          />
        </svg>
      </div>

      <h1 className="thank-you-title">Thank you for your order!</h1>
      <p className="thank-you-subtitle">
        Your order has been placed successfully.
      </p>

      {orderId && (
        <div className="thank-you-details">
          <div className="thank-you-detail-row">
            <span>Order Number</span>
            <span>{orderId}</span>
          </div>
          <div className="thank-you-detail-row">
            <span>Payment Method</span>
            <span>{paymentLabel}</span>
          </div>
          {total !== undefined && (
            <div className="thank-you-detail-row">
              <span>Amount</span>
              <span>{formatPrice(total)}</span>
            </div>
          )}
        </div>
      )}

      <Link to="/" className="back-home-btn">
        Back to Home
      </Link>
    </div>
  );
}

export default ThankYou;