import React, { useState, useEffect } from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();

      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12;
      if (hours === 0) hours = 12;
      hours = String(hours).padStart(2, "0");

      setDateTime(
        `${day}/${month}/${year} : ${hours}:${minutes}:${seconds} ${ampm}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">🌿 Paradise Nursery</h2>
          <p>
            Bringing nature closer to your home.
            Fresh plants delivered with care.
          </p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p>
            Email:
            <a
              href="mailto:prahlad9026@gmail.com"
              className="contact-link"
            >
              prahlad9026@gmail.com
            </a>
          </p>

          <p>
            Phone:
            <a
              href="tel:+918009872468"
              className="contact-link"
            >
              +91 8009872468
            </a>
          </p>

          <p>Location: India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Prahlad | Paradise Nursery Project.
        </p>

        <p className="live-time">{dateTime}</p>
      </div>
    </footer>
  );
}

export default Footer;