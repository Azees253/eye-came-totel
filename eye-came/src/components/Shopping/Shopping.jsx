import React, { useContext } from "react";
import "./Shopping.css";
import { StoreContext } from "../../context/StorageContext";
import { useNavigate } from "react-router-dom";

const Shopping = () => {
  const { cartItems, product_Items, getTotalAmount, removeToCart, url } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="about">
        <div className="about-item">
          <div className="about-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {product_Items.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div className="about-items-title about-items-item" key={index}>
                  <img src={`${url}/images/` + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{cartItems[item._id] * item.price}</p>
                  <p
                    onClick={() => removeToCart(item._id)}
                    style={{ cursor: "pointer" }}
                  >
                    x
                  </p>
                </div>
              );
            }
          })}
          <div className="Totals">
            <h3>Total:{getTotalAmount() === 0 ? 0 : getTotalAmount()}</h3>
            <button onClick={() => navigate("/address")}> Address</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopping;
