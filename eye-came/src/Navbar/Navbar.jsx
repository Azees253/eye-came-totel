import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { MenuLink } from "../Menulinks";
import { StoreContext } from "../context/StorageContext";

const Navbar = ({ setShowLogin }) => {
  const { token, setToken, getTotalAmount } = useContext(StoreContext);
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen({ clicked: !isOpen.clicked });
  }

  function handleClose() {
    setIsOpen(false);
  }

  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    alert("Loggin out");
  };

  return (
    <div className="container">
      <div className="navbar">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfG3ANpqZ5cbotcEFr5GgyOHva7CYqWuJfzyoLzkfGhwwSnnhTP246tbMK9bZbBbf5OcY&usqp=CAU"
            alt=""
          />
        </div>

        <div className="nav">
          <ul className={isOpen.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuLink.map((item, index) => {
              return (
                <li key={index}>
                  <div>
                    <Link
                      className={item.cName}
                      onClick={handleClose}
                      to={item.url}
                    >
                      {item.title}
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="signin-btn">
          {!token ? (
            <button className="sign-btn" onClick={() => setShowLogin(true)}>
              Sign in
            </button>
          ) : (
            <div className="logout-container">
              <div className="order-container">
                <button>Order</button>
                <div className="order-child">
                  <Link to="/order">
                    <p>My Orders</p>
                  </Link>
                  <Link to="/serviesconform">
                    <p>Servies Orders</p>
                  </Link>
                  <p onClick={Logout}>Logout</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="nav-search-icon">
          <Link to="/shopping">
            <i class="fa-solid fa-bag-shopping" style={{ color: "black" }}></i>
          </Link>

          <div className={getTotalAmount() === 0 ? "" : "dot"}></div>
        </div>
        <div className="menu" onClick={handleClick}>
          <i
            class={isOpen.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
