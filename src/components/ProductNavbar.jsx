import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiArrowLeft, FiShoppingCart } from "react-icons/fi";
import "./ProductNavbar.css";

export default function ProductNavbar() {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <nav className="product-navbar">

      {/* BACK BUTTON */}
      <button className="nav-icon" onClick={() => navigate(-1)}>
        <FiArrowLeft size={18} />
      </button>

      {/* LOGO MINIMAL (opcional) */}
      <Link to="/" className="logo">
        Lavender
      </Link>

      {/* CART */}
      <Link to="/cart" className="nav-icon cart">
        <FiShoppingCart size={18} />
        <span className="cart-count">{cart.length}</span>
      </Link>

    </nav>
  );
}