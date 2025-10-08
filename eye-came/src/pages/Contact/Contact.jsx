import React from "react";
import "./Contact.css";
import Footer from "../../Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-detail">
          <div className="txt-alng">
            <h3>📍 Company Address</h3>
            <p>123 main Bazzar,</p>
            <p>Kadayanallur,Tenkasi-627751</p>
          </div>

          <div className="txt-alng">
            <h3>🕒 Customer Service Hours</h3>
            <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="contact-detail">
          <div className="txt-alng">
            <h3>Phone Support</h3>
            <p>"555-222-444-8888</p>
            <div className="contact-icon">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-square-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>

          <div className="txt-alng">
            <h3>📧 Email Support</h3>
            <p>eyecame@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
