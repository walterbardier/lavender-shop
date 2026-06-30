import { useCart } from "../context/CartContext";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";

import {
  FiPlus,
  FiMinus,
  FiTrash2,
  FiShoppingCart
} from "react-icons/fi";

import "./Cart.css";

export default function Cart() {
  const { cart, addToCart, removeFromCart, decreaseQty } = useCart();

  const navigate = useNavigate();
  const [animatingId, setAnimatingId] = useState(null);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // micro bounce cantidad
  const triggerBounce = (id) => {
    setAnimatingId(id);
    setTimeout(() => setAnimatingId(null), 200);
  };

  // 💜 transición checkout
  const handleCheckout = () => {
    document.body.classList.add("checkout-transition");
    setTimeout(() => {
      navigate("/checkout");
    }, 300);
  };

  // animación número (contador suave)
  const motionValue = useMotionValue(subtotal);
  const [displayTotal, setDisplayTotal] = useState(subtotal);

  useEffect(() => {
    const controls = animate(motionValue, subtotal, {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplayTotal(latest);
      }
    });

    return controls.stop;
  }, [subtotal]);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <p className="cart-count">
        {totalItems === 1
          ? "1 item in your cart"
          : `${totalItems} items in your cart`}
      </p>

      {/* contenedor animado */}
      <motion.div
        layout
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="cart-container"
      >
        {/* 🛍️ ITEMS */}
        <motion.div
          layout="size"
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="cart-items"
        >
          {cart.length === 0 && <p>Your cart is empty</p>}

          <AnimatePresence>
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout="position"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  x: 40,
                  scale: 0.9,
                  filter: "blur(6px)"
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="cart-item"
              >
                {/* 🖼️ IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="item-image"
                />

                <div className="item-info">
                  <h3>{item.name}</h3>
                  <span className="category">{item.category}</span>

                  {/* ➕➖ */}
                  <div className="item-controls">
                    <button
                      onClick={() => {
                        decreaseQty(item.id);
                        triggerBounce(item.id);
                      }}
                    >
                      <FiMinus />
                    </button>

                    <span
                      className={
                        animatingId === item.id ? "qty bounce" : "qty"
                      }
                    >
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => {
                        addToCart(item);
                        triggerBounce(item.id);
                      }}
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>

                {/* 💰 PRECIO */}
                <div className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                {/* 🗑️ DELETE */}
                <button
                  className="delete-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FiTrash2 />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 🧾 SUMMARY */}
        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <motion.span
              key={subtotal}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              ${displayTotal.toFixed(2)}
            </motion.span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>

            {/* combo: número animado + entrada */}
            <motion.span
              key={subtotal}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="total-amount"
            >
              ${displayTotal.toFixed(2)}
            </motion.span>
          </div>
          
          {/* <button className="checkout-btn" onClick={handleCheckout}></button> */}
          <button className="checkout-btn">
            Checkout
          </button>

          <Link to="/shop" className="continue-btn">
            Continue Shopping
          </Link>
        </div>
      </motion.div>
    </div>
  );
}