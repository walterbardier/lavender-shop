import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  FiHome,
  FiShoppingBag,
  FiShoppingCart,
  FiArrowLeft
} from "react-icons/fi";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const { cart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);

  const isProductPage = location.pathname.startsWith("/product");

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const [cartBounce, setCartBounce] = useState(false);
  const [prevCount, setPrevCount] = useState(totalItems);

  useEffect(() => {
    if (totalItems !== prevCount) {
      setCartBounce(true);
      setTimeout(() => setCartBounce(false), 300);
      setPrevCount(totalItems);
    }
  }, [totalItems]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const navItems = [
    { path: "/", icon: FiHome },
    { path: "/shop", icon: FiShoppingBag },
    { path: "/cart", icon: FiShoppingCart }
  ];

  return (
    <nav
      className={`glass-navbar ${scrolled ? "scrolled" : ""} ${
        isProductPage ? "compact" : ""
      }`}
      onMouseMove={handleMouseMove}
      style={{
        "--x": `${mouse.x}px`,
        "--y": `${mouse.y}px`
      }}
    >
      {!isProductPage && (
        <div className="dock">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isCart = item.path === "/cart";
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`icon-btn ${isActive ? "active" : ""} ${
                  isCart ? "cart-target" : ""
                } ${isCart && cartBounce ? "cart-bounce" : ""}`}
                style={{
                  "--is-active": isActive ? 1 : 0
                }}
              >
                <div className="icon-wrapper">
                  <Icon size={20} />

                  {isCart && totalItems > 0 && (
                    <span key={totalItems} className="badge">
                      {totalItems}
                    </span>
                  )}
                </div>

                {isActive && <span className="dot" />}
              </Link>
            );
          })}
        </div>
      )}

      {isProductPage && (
        <>
          <button
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            <FiArrowLeft size={22} />
          </button>

          <Link
            to="/cart"
            className={`icon-btn cart-target ${
              cartBounce ? "cart-bounce" : ""
            }`}
          >
            <div className="icon-wrapper">
              <FiShoppingCart size={20} />

              {totalItems > 0 && (
                <span key={totalItems} className="badge">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
        </>
      )}
    </nav>
  );
}