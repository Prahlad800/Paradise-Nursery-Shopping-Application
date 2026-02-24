import React from "react";
import { Link } from "react-router-dom";
import "./product_listing_page.css";
import Footer from "../../Footer/Footer";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quantityDecre, quantityIncre } from "../../slice/productSlice";
import Navbar from "../navbar/Navbar";

function Product_listing_page() {
  let id;

  const productItam = useSelector((state) => state.product);
  const count = useSelector((state) =>
    state.product.reduce((total, item) => total + item.quantity, 0),
  );
  // const count=useSelector((state)=>state.product.quantity)
  const dispatch = useDispatch();

  return (
    <>
      <Navbar count={count} />
      <div id="product-listing">
        {productItam.map((product, index) => (
          <div key={index} className="card-product">
            <img src={product.image} alt={product.name} className="card-img" />
            <h3 className="card-name">{product.name}</h3>
            <p className="card-description">{product.description}</p>
            <p className="card-category">{product.category}</p>

            <div className="price-section">
              <span className="card-finalPrice">₹{product.finalPrice}</span>
              <span className="card-price">₹{product.price}</span>
              <span className="card-discount">{product.discount}% OFF</span>
            </div>

            <div className="btm-group">
              <button
                className="order-btn"
                onClick={() => {
                  dispatch(quantityIncre(index+1));
                }}
              >
                <Link to={"/product/cart"} className="link">
                  Order Now
                </Link>
              </button>
              <button
                className="cart-btn"
                onClick={() => {
                  dispatch(quantityIncre(index+1));
                }}
              >
                <Link to={"#"} className="link">
                  Add to Cart
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Product_listing_page;
