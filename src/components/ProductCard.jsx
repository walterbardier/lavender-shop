import { useRef } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    cardRef.current.style.transform = `
      translate(${x * 0.03}px, ${y * 0.03}px)
      scale(1.02)
    `;
  };

  const reset = () => {
    cardRef.current.style.transform = "translate(0,0) scale(1)";
  };

  const goToProduct = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAdd = (e) => {
    e.stopPropagation();

    const img = cardRef.current.querySelector("img");
    const cartIcon = document.querySelector(".cart-target");

    if (!img || !cartIcon) {
      addToCart(product);
      return;
    }

    const imgRect = img.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    const clone = img.cloneNode(true);

    clone.style.position = "fixed";
    clone.style.left = `${imgRect.left}px`;
    clone.style.top = `${imgRect.top}px`;
    clone.style.width = `${imgRect.width}px`;
    clone.style.height = `${imgRect.height}px`;
    clone.style.zIndex = "9999";
    clone.style.pointerEvents = "none";
    clone.style.transition = "all 0.7s cubic-bezier(.2,.9,.2,1)";

    document.body.appendChild(clone);

    requestAnimationFrame(() => {
      clone.style.left = `${cartRect.left}px`;
      clone.style.top = `${cartRect.top}px`;
      clone.style.width = "20px";
      clone.style.height = "20px";
      clone.style.opacity = "0.4";
      clone.style.transform = "scale(0.2)";
    });

    setTimeout(() => {
      clone.remove();
      addToCart(product);
    }, 700);
  };

  return (
    <div
      ref={cardRef}
      className="product-card"
      onClick={goToProduct}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>

      {/* 1RA FILA */}
      <div className="product-header">
        <h3>{product.name}</h3>
        <span className="price">${product.price}</span>
      </div>

      {/* 2DA FILA */}
      <button className="add-to-cart" onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
  );
}