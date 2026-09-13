import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import "./Navbar.css";

function Navbar() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          FOOD<span>IES</span>
        </Link>

        <nav className={menuOpen ? "navbar-links navbar-links-open" : "navbar-links"}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "navbar-link navbar-link-active" : "navbar-link"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? "navbar-link navbar-link-active" : "navbar-link"
            }
            onClick={closeMenu}
          >
            Menu
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "navbar-link navbar-link-active" : "navbar-link"
            }
            onClick={closeMenu}
          >
            Cart
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "navbar-cart-link navbar-cart-link-active navbar-cart-link-mobile"
                : "navbar-cart-link navbar-cart-link-mobile"
            }
            onClick={closeMenu}
          >
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path
                fill="currentColor"
                d="M7 4h-2l-.94 2H2v2h1.06l2.36 8.48A2 2 0 0 0 7.34 18H17a1 1 0 0 0 0-2H7.34l-.36-1.3.36-.03 10-1a1 1 0 0 0 .89-.75l1.5-6A1 1 0 0 0 18.75 6H5.53l-.4-1.4A1 1 0 0 0 4.16 4H7zm2 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm8 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
              />
            </svg>
            View Cart
            {cartCount > 0 && (
              <span className="navbar-cart-count">{cartCount}</span>
            )}
          </NavLink>
        </nav>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? "navbar-cart-link navbar-cart-link-active navbar-cart-link-desktop"
              : "navbar-cart-link navbar-cart-link-desktop"
          }
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path
              fill="currentColor"
              d="M7 4h-2l-.94 2H2v2h1.06l2.36 8.48A2 2 0 0 0 7.34 18H17a1 1 0 0 0 0-2H7.34l-.36-1.3.36-.03 10-1a1 1 0 0 0 .89-.75l1.5-6A1 1 0 0 0 18.75 6H5.53l-.4-1.4A1 1 0 0 0 4.16 4H7zm2 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm8 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
            />
          </svg>
          {cartCount > 0 && (
            <span className="navbar-cart-count">{cartCount}</span>
          )}
        </NavLink>

        <button
          className={menuOpen ? "navbar-toggle navbar-toggle-open" : "navbar-toggle"}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;