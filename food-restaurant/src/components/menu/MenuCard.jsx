import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";
import "./MenuCard.css";

function MenuCard({ id, image, title, rating, reviews, price }) {
  const { addToCart } = useCart();

  function handleQuickAdd(e) {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, title, image, price, size: "Regular", quantity: 1 });
  }

  return (
    <Link to={`/product/${id}`} className="menu-card">
      <div className="menu-card-image-wrap">
        <img src={image} alt={title} className="menu-card-image" />
      </div>

      <div className="menu-card-body">
        <h3 className="menu-card-title">{title}</h3>

        <div className="menu-card-rating-row">
          <svg className="menu-card-star" viewBox="0 0 24 24" width="14" height="14">
            <path
              fill="currentColor"
              d="M12 2l2.9 6.26 6.9.6-5.2 4.6 1.6 6.78L12 16.9l-6.2 3.34 1.6-6.78-5.2-4.6 6.9-.6z"
            />
          </svg>
          <span className="menu-card-rating">{rating}</span>
          <span className="menu-card-reviews">({reviews} reviews)</span>
        </div>

        <div className="menu-card-footer">
          <span className="menu-card-price">{formatPrice(price)}</span>
          <button
            className="menu-card-cart-btn"
            aria-label="Add to cart"
            onClick={handleQuickAdd}
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="currentColor"
                d="M7 4h-2l-.94 2H2v2h1.06l2.36 8.48A2 2 0 0 0 7.34 18H17a1 1 0 0 0 0-2H7.34l-.36-1.3.36-.03 10-1a1 1 0 0 0 .89-.75l1.5-6A1 1 0 0 0 18.75 6H5.53l-.4-1.4A1 1 0 0 0 4.16 4H7zm2 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm8 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
              />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
}

export default MenuCard;