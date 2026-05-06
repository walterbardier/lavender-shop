import { useState, useEffect } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterTabs from "../components/FilterTabs";
import "./Shop.css";

export default function Shop() {
  const [selected, setSelected] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  const filtered =
    selected === "All"
      ? products
      : products.filter((p) => p.tags.includes(selected));

  return (
    <div className="shop">
      <div className="shop-header">
        <h1>Shop</h1>
        <p>
          Embrace your inner essence with pieces designed to let your energy shine from within.
        </p>
      </div>

      <FilterTabs selected={selected} setSelected={setSelected} />

      <div className="grid">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="skeleton-card" />
            ))
          : filtered.map((product, index) => (
              <div
                key={product.id}
                className="product-wrapper"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
      </div>
    </div>
  );
}