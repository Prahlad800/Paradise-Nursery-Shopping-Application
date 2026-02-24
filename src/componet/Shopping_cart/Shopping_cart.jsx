import React from "react";
import "./shopping_cart.css";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer.jsx";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../navbar/Navbar.jsx";
import { quantityDecre, quantityIncre } from "../../slice/productSlice";


function Shopping_cart() {
  let location =useLocation();
  let  price=location.state?.product.finalPrice || {}
  const count = useSelector((state) =>
    state.product.reduce((total, item) => total + item.quantity, 0),
  );
  const productItam = useSelector((state) => state.product);
  const id = productItam.map((item) => item.id);

  const dispatch = useDispatch();
 
  const totalPrice = productItam
    .filter((item) => item.quantity > 0)
    .reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  const totaldiscount = productItam
    .filter((item) => item.quantity > 0)
    .reduce((total, item) => {
      return total + item.discount * item.quantity;
    }, 0);
  const totalFinalPrice = productItam
    .filter((item) => item.quantity > 0)
    .reduce((total, item) => {
      return total + item.finalPrice * item.quantity;
    }, 0);

  return (
    <div>
      <Navbar count={count} />
      <div id="main-shopping">
        <div id="product-list">
          {productItam
            .filter((item) => item.quantity > 0)
            .map((item, index) => (
              <div key={index} className="shopping-card-detail">
                <div className="shopping-card-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="shopping-card-name-quant">
                  <div className="shopping-card-maineg">
                    <p className="shopping-card-item-name">{item.name}</p>
                    <p className="shopping-card-item-description">
                      {item.description}
                    </p>
                    <p className="shopping-card-item-category">
                      {item.category}
                    </p>

                    {/* price */}
                    <span className="shopping-card-item-finalPrice">
                      ₹{item.finalPrice * item.quantity}
                    </span>
                    <span className="shopping-card-item-price">
                      ₹{item.price * item.quantity}
                    </span>
                    <span className="shopping-card-item-discount">
                      {item.discount}% OFF
                    </span>
                  </div>
                  <div className="quantity-control">
                    <span
                      className="qty-btn"
                      onClick={() => dispatch(quantityDecre(item.id))}
                    >
                      -
                    </span>
                    <span className="qty-number">{item.quantity}</span>
                    <span
                      className="qty-btn"
                      onClick={() => dispatch(quantityIncre(item.id))}
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div id="price-section">
          <h3>PRICE DETAILS</h3>

          <div className="row">
            <span>MRP Price</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="row discount">
            <span>Discount</span>
            <span>- ₹{totalPrice - totalFinalPrice}</span>
          </div>

          <div className="row total">
            <span>Total Amount</span>
            <span>₹{totalFinalPrice}</span>
          </div>

          <p className="save-msg">
            You will save ₹{totalPrice - totalFinalPrice} on this order
          </p>
        </div>
      </div>
      <div id="order55">
        <div id="order-section">
          <div className="order-now">
            <span>₹{totalFinalPrice}</span>
            <Link to={"/product/OrderConfirmation"} state={{price, totalFinalPrice}} >
            <button className="checkout-btn">PLACE ORDER</button>
            </Link>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shopping_cart;
