import { useState } from "react";
import "./Checkout.css";

export default function Checkout() {
  const [payment, setPayment] = useState("");

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <input placeholder="Full Name" />
      <input placeholder="Email" />
      <input placeholder="Address" />

      <div className="payments">
        {["PayPal", "Mercado Pago", "Visa", "Mastercard"].map((p) => (
          <div
            key={p}
            className={`pay-option ${payment === p ? "active" : ""}`}
            onClick={() => setPayment(p)}
          >
            {p}
          </div>
        ))}
      </div>

      <button className="complete">Complete Purchase</button>
    </div>
  );
}