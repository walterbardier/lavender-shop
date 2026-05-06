import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  const handleAdd = () => {
    addToCart(product);

    // trigger animación navbar
    window.dispatchEvent(new Event("cart:add"));
  };

  return (
    <div className="product-detail">
      
      {/* LEFT IMAGE */}
      <div className="left">
        <img src={product.image} alt={product.name} />
      </div>

      {/* RIGHT INFO */}
      <div className="right">

        <div className="title-row">
          <h1>{product.name}</h1>
          <span className="price">${product.price}</span>
        </div>

        <p className="description">
          {product.description ||
            "A minimalist piece designed to bring calm, softness and identity to your wardrobe."}
        </p>

        <button
          className="add-to-cart-detail"
          onClick={handleAdd}
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}