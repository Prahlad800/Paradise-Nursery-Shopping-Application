import React from "react";
import "./OrderConfirmation.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function OrderConfirmation() {
    let product = useSelector((state)=>state.product)
    let productItam =product.map(item => ({
  ...item,
  quantity: 0
}));
  let location = useLocation();
  const { totalFinalPrice } = location.state || {};

  return (
    <div className="order-container">
      <div className="order-card">
        <div className="check-circle">✓</div>

        <h2>Your Order Confirmed!</h2>
        <p className="order-id">Order ID: #ORD2026-001</p>

        <div className="order-details">
          <div className="row">
            <span>Status:</span>
            <span className="status">Processing...</span>
          </div>

          <div className="row">
            <span>Total Amount:</span>
            <span className="amount">Rs.{totalFinalPrice}</span>
          </div>

          <div className="row">
            <span>Delivery:</span>
            <span>3-5 Days</span>
          </div>
        </div>

        <div className="button-group">
          <button className="btn primary" onClick={productItam}>
            <Link  className="link" to={"/product"}>Continue Shopping</Link>
          </button>
        </div>

        <p className="thank-you">Thank you for your purchase! 👍</p>
      </div>
    </div>
  );
}

export default OrderConfirmation;
