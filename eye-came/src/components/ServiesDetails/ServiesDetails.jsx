import React, { useContext } from "react";
import "./ServiesDetails.css";
import { StoreContext } from "../../context/StorageContext";
import { Link, useNavigate } from "react-router-dom";

const ServiesDetails = ({ image, title, desc, servies, id }) => {
  const {
    addToServies,
    removeToServies,
    cartItems,
    serviesCart,
    setCartItems,
    addToCart,
    removeToCart,
  } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="servies-details">
      <img src={image} alt="" />
      <div className="servies-details-inside">
        <h4>
          <span style={{ color: "rgba(6, 6, 122, 0.774)" }}>Name:</span>
          {title}
        </h4>
        <p>
          <span style={{ color: "rgba(6, 6, 122, 0.774)" }}>Servies: </span>
          {servies}
        </p>
        <p>
          {" "}
          <span style={{ color: "rgba(6, 6, 122, 0.774)" }}>
            Description:
          </span>{" "}
          {desc}
        </p>
        <div className="serviesQty-container">
          {!serviesCart[id] ? (
            <>
              <div className="serviesQty">
                <button onClick={() => addToServies(id)}>Request</button>
              </div>
            </>
          ) : (
            <>
              <div className="serviestotal">
                <div className="serviestotal-btn">
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => removeToServies(id)}
                  >
                    Cancel
                  </button>
                  <button
                    className="serviestotalorder-btn"
                    onClick={() => navigate("/serviesorder")}
                  >
                    send
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiesDetails;
